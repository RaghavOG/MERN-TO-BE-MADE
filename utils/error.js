export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
  };
  
  // custom error handler function to handle errors in the application and send a response to the client with the error message and status code. 
  // This function takes two arguments: statusCode and message.
  // It creates a new Error object and sets the statusCode and message properties on it.
  // Finally, it returns the error object.
  
  