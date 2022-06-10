const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('view engine', 'ejs');

const comments = [{
        id: uuid(),
        name: 'John',
        comment: 'This is a funny'
    },
    {
        id: uuid(),
        name: 'Rubby',
        comment: 'I like to go to filmhouse with my girlfriend'
    },
    {
        id: uuid(),
        name: 'Skylwalker',
        comment: 'Plz delete your account now'
    },
    {
        id: uuid(),
        name: 'Sarah',
        comment: 'We would really miss you when you are gone'
    },
    {
        id: uuid(),
        name: 'Destiny',
        comment: 'My real nigga i would miss ou too and your vibes on line for girls'
    },
    {
        id: uuid(),
        name: 'Kelvin',
        comment: 'Your are a very lively person to have around and keeping the environment condusive enough'
    },
]
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new', { comments })
})

app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    comments.push({ name, comment, id: uuid() })
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

// app.set('views', path.join(__dirname, '/views'));
// app.get('/tacos', (req, res) => {
//     res.send('Get /tacos response');
// })

// app.post('/tacos', (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`OK, here are your ${qty} ${meat} tacos`);
// })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})