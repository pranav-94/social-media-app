```javascript
const secret = process.env.APP_SECRET;

if (!secret) {
  // In a real application, you might handle this differently based on environment (dev vs prod)
  // For production, it's critical to have the secret set.
  // Throwing an error ensures the application doesn't start with a missing secret.
  console.error('FATAL ERROR: APP_SECRET environment variable is not set.');
  process.exit(1); // Exit the process with an error code
}

module.exports = secret;
```