const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./config/connection');
const cors = require('cors');
const userRouter = require('./routes/user');
const userHelpers = require('./helpers/superAdmin')
app.use(express.json());

// Use CORS middleware before defining routes
app.use(cors({
  origin: 'http://localhost:3000',
}));



// Use the userRouter for the '/user' route
app.use('/user', userRouter);

// Start the server
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);

  // Connect to the database
  await db.connectToDatabase();

  // Register superadmin upon server start
  const superadmin = {
    username: 'super',
    password: 'super@123',
  };

  try {
    result = await userHelpers.CreateSuperAdmin(superadmin);
    if (result.status) {
      console.log(result.message);
    } else {
      console.log(result.message);
    }
  } catch (error) {
    console.error('Error registering superadmin:', error);
  }
});