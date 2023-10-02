
import React, { useState } from 'react';

function Videodetail() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleGoogleLogin = () => {
    const clientId = '816446424225-bdct7n460dhui7bnd8j7nbo35jkdcqv4.apps.googleusercontent.com'; // Replace with your client ID
    const redirectUri = 'http://localhost:3000'; // Should match the one in your Google Cloud Console settings
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;

    // Open a new window to initiate the Google OAuth flow
    const popup = window.open(authUrl, '_blank', 'width=500,height=600');
    
    // Listen for messages from the popup window
    window.addEventListener('message', (event) => {
      if (event.origin === window.location.origin) {
        const { data } = event;
        if (data.type === 'google-auth-success') {
          setIsAuthenticated(true);
        }
      }
    });
  };
  return (

  <div className="">Ho</div>

  )
}

export default Videodetail;