```javascript
const express = require('express')
const userRouter = require('./user')
const router = express.Router()

// Mount the user router under the '/user' path
router.use('/user', userRouter)

// Export the main router
module.exports = router
```