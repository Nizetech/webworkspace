const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');
// const methodOverride = require('method-override');
// const { v4: uuid } = require('uuid');
// const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('view engine', 'ejs');

let comments = [{
        // id: uuid(),

        id: 1,
        name: 'John',
        comment: 'This is a funny'
    },
    {
        id: 2,
        name: 'Rubby',
        comment: 'I like to go to filmhouse with my girlfriend'
    },
    {
        id: 3,
        name: 'Skylwalker',
        comment: 'Plz delete your account now'
    },
    {
        id: 4,
        name: 'Sarah',
        comment: 'We would really miss you when you are gone'
    },
    {
        id: 5,
        name: 'Destiny',
        comment: 'My real nigga i would miss ou too and your vibes on line for girls'
    },
    {
        id: 6,
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
    comments.push({
        name,
        comment,
        //  id: uuid() 
        id: comments.length + 1
    })
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', { comment })
})
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/edit', { comment })
})

app.delete('/comment/:id', (req, res) => {
    const { id } = req.params;
    // const comment = comments.find(c => c.id === parseInt(id));
    comments = comments.filter(c => c.id !== parseInt(id));
    // comments.splice(comments.indexOf(comment), 1);
    res.redirect('/comments');
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundcomment = comments.find(c => c.id === parseInt(id));
    foundcomment.comment = newCommentText;
    res.redirect('/comments');
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