const Product = require('./models/products');
const mongoose = require('mongoose');
main().catch(function(err) {
    console.log('Oh NO Mongo connection Error!!');
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://localhost:27017/farmStand');
    console.log('Mongo Connection Open');
}

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.88,
//     category: 'fruits'
// })

// p.save().then(p => {
//     console.log(p)
// }).catch(err => {
//     console.log(err)
// })

const seedProducts = [{
        name: 'Ruby Grapefruit',
        price: 1.88,
        category: 'fruit'
    },
    {
        name: 'Organic Apple',
        price: 6.88,
        category: 'fruit'
    },
    {
        name: 'Melloni',
        price: 3.88,
        category: 'fruit'
    },
    {
        name: 'pear fruit',
        price: 9.88,
        category: 'fruit'
    },
    {
        name: 'mango juice ',
        price: 7.0,
        category: 'fruit'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })