// Juno initialization moved to +layout.ts to avoid conflicts

export function handleError(error) {
  console.error('Client Error Details:', {
    message: error.message,
    stack: error.stack,
    name: error.name,
    error: error
  });
  return {
    message: 'Something went wrong!'
  };
}

export function init() {
  // any client-side initialization logic can go here
}