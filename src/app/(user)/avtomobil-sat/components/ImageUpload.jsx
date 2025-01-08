// app/components/ImageUpload.js

'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Handle form submission
  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);

    // Create a FormData object to send the image to the server
    const formData = new FormData();
    formData.append('image', image);

    try {
      // Send the image to the server using the API route
      const res = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert('Image uploaded successfully!');
        // Optionally, navigate to a different page or update UI after successful upload
        router.push('/success');
      } else {
        alert('Upload failed. Try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during the upload.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Upload Car Images</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && <img src={URL.createObjectURL(image)} alt="Image Preview" width="200" />}
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}
