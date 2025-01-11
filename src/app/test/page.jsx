"use client"

import { useState } from 'react';
import { auth, GoogleAuthProvider, signInWithPopup, getIdToken } from '@/src/lib/firebase'; // Firebase auth module
import axios from 'axios'; // For making HTTP requests to your API

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Google sign-in
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Get the ID token for authentication on the server
      const idToken = await getIdToken(user);

      // Send user data to the server to be saved in the database
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        idToken, // We will send the ID token to verify the user's authenticity on the server
      };

      // Call your API to save the user to your MySQL database via Sequelize
      await axios.post('/api/auth/save-user', userData);

      console.log('User signed in with Google:', user);
    } catch (err) {
      setError('Failed to sign in with Google');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login or Sign Up</h2>
      <button onClick={signInWithGoogle} disabled={loading}>
        {loading ? 'Signing in with Google...' : 'Sign in with Google'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
