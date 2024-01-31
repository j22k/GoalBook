const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares, routes, etc. go here

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
