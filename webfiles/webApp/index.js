const express = require('express');
const app = express();
const path = require('path');
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof')
})

app.listen(3000, () => {
    console.log('App is Listening on port 3000!')
})