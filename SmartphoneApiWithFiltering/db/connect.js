const mongoose = require('mongoose');

uri = "mongodb+srv://yasharth:6391343298@cluster0.odu1mt5.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB