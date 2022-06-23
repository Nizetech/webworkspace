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

const personSchema = new mongoose.Schema({
    first: String,
    last: String,
})

personSchema.virtual('fullNmae').get(function() {
    return `$(this.first) $(this.last)`
})

// MIddle ware
personSchema.pre('save', async function() {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log('ABOUT TO SAVE!!!')
})
personSchema.post('save', async function() {
    console.log('JUST SAVED ')
})

const Person = mongoose.model('Person', personSchema);