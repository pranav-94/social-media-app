```javascript
const zod = require('zod');

const userSchema = zod.object({
    username: zod.string()
        .trim()
        .min(3, "Username must be at least 3 characters long.")
        .max(30, "Username must be at most 30 characters long."),
    email: zod.string()
        .trim()
        .toLowerCase()
        .email("Invalid email address."),
    password: zod.string()
        .min(8, "Password must be at least 8 characters long.")
        .max(100, "Password must be at most 100 characters long.")
});

// Optional: Define separate schemas for different operations like login or update
const userLoginSchema = zod.object({
    email: userSchema.shape.email, // Use the same email validation
    password: zod.string().min(1, "Password is required.") // Password must be provided for login
});

const userUpdateSchema = zod.object({
    username: userSchema.shape.username.optional(),
    email: userSchema.shape.email.optional(),
    password: userSchema.shape.password.optional(),
    // Add other fields that can be updated
}).strict().partial(); // Use partial() to make all fields optional for update, strict() to disallow unknown fields

module.exports = {
    userSchema,
    userLoginSchema,
    userUpdateSchema,
};
```