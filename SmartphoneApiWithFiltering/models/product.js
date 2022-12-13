const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter product name'],
    },
    price:{
        type: Number,
        required: [true, 'Please enter product price'],
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
        default: 4.5,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum:{
            values: [
                'apple',
                'samsung',
                'google',
                'oneplus',
                'blackberry',
                'nokia',
                'microsoft',
                'huawei',
                'oppo',
                'vivo',
                'xiaomi',
                'realme',
                'asus',
                'lenovo',
                'lg',
                'sony',
                'motorola',
                'htc',
                'tecno',
                'infinix',

            ],
            message: '{VALUE} is not supported',
            },
    },

});

module.exports = mongoose.model('Product', productSchema);
