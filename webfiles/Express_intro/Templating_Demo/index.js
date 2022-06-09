const express = require('express');
const path = require('path');
const app = express();
const redditData = require('./data.json');
app.use(express.static(path.join(__dirname, 'public')));
// console.log(redditData);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {

        res.render('subreddit', {...data });
    } else {
        res.render('notfound', { subreddit });
    }
})

app.get('/c', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston', 'Soccer']
    res.render('cats', { cats: cats });
})
app.get('/:rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num: num });
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})