const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./config/connection');
const cors = require('cors');
const userRouter = require('./routes/user');
app.use(express.json());

// Use CORS middleware before defining routes
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Connect to the database
db.connectToDatabase();

// Use the userRouter for the '/user' route
app.use('/user', userRouter);

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
