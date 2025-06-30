```javascript
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log('MongoDB connected successfully.');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Optionally exit the process if DB connection is critical
    // process.exit(1);
  });

// Define Schemas
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true // Often good practice for usernames/emails
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { // Note: Password should be hashed before saving
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    trim: true
  },
  profilePic: {
    type: String,
    default: '' // Or a default image URL
  }
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const messageSchema = new mongoose.Schema({
  // Consider referencing a User model for sender (e.g., sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  // Keeping denormalized user info for now based on original schema structure
  username: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String }, // Assuming this is sender's profile image
  message: {
    type: String,
    required: true,
    trim: true
  },
  // Removed ambiguous 'id' field. Mongoose provides _id automatically.
  // If 'id' was meant to be a room ID or similar, add it back with a clear name and type.
}, { timestamps: true });

const commentSchema = new mongoose.Schema({
  // Assuming 'id' was a reference to a post or item being commented on
  // Consider referencing a Post model (e.g., post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true })
  postId: { // Renamed 'id' for clarity
    type: String, // Or mongoose.Schema.Types.ObjectId if referencing a Mongoose model
    required: true
  },
  comment: {
    type: String,
    required: true,
    trim: true
  },
  // Consider referencing a User model for the author (e.g., author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  // Keeping denormalized user info for now based on original schema structure
  username: { type: String, required: true },
  name: { type: String, required: true },
  profilePic: { type: String },
}, { timestamps: true });

// Define Models
// Use singular names, Mongoose automatically pluralizes collection names (e.g., 'User' -> 'users')
const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);
const Comment = mongoose.model('Comment', commentSchema);

// Export Models
module.exports = {
  User,
  Message,
  Comment
};
```