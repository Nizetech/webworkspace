const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const productSchema = new mogoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'meat', 'dairy', 'drinks'],
    }

})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;