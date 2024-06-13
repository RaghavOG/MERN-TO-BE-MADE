import React from 'react';
import { Button } from 'flowbite-react';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">404 - Page Not Found</h1>
        <p className="error-message">The page you are looking for does not exist.</p>
        <Button
          gradientDuoTone='purpleToBlue'
          outline
          onClick={() => { window.location.href = '/'; }} // Redirect to home page
        >
          Go to Home Page
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
