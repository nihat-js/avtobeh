const handleLogout = () => {
  document.cookie = "token=; max-age=0; path=/"; // Clears the token cookie
  window.location.href = "/login"; // Redirect to login
};
