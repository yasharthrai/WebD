require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 3000;

const products_routes = require('./routes/products');

app.get('/', (req, res) => {
    res.send('Hello World');
});

//middleware or to set routes 
app.use("/api/products", products_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
           console.log( `Server listening on port ${PORT}`);
        });        
    } catch (err) {
        console.error(err);
    }
};

start();