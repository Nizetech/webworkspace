const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/myapp');
main().catch(function(err) {
    console.log('Oh NO Error!!');
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Connection Open');
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },

    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    },
});

const Product = mongoose.model('Product', productSchema);

const helmet = new Product({ name: 'Mountain Hike', price: 190, categories: ['cycling', ] })
helmet.save().then(data => {
    console.log('IT WORKED!')
    console.log(data);
}).catch(err => {
    console.log('Oh No Error!')
    console.log(err);
})

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 10.99 }, { size: 'XL' }, { new: true, runValidators: true }).then(data => {
//     console.log('IT WORKED!')
//     console.log(data);
// }).catch(err => {
//     console.log('Oh No Error!')
//     console.log(err);
// })

// productSchema.methods.toggleOneSale = function() {
//     this.onSale = !this.onSale;
//     this.save();
// },

// productSchema.methods.greet = function() {
//     console.log('Hello!!! HI!! HOWDY!!')
// console.log(`-from ${this.name}`)
// }

// const findProduct = async() => {
//     const foundProduct = await Product.findOne({ title: 'Tire Pump' });
//     foundProduct.greet();
// }

// findProduct();