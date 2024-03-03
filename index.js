const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json req body
app.use(express.json());

const todoRoutes = require('./routes/todos');

//mounting/appending api routes
app.use("/api/v1", todoRoutes);

//connect to db
const dbConnect = require('./config/database');
dbConnect();

//default route
app.get('/', (req, res) => {
    res.send(`<h1>This is Home Page</h1>`);
})

app.listen(PORT, () => {
    console.log(`app started at port ${PORT}`);
})