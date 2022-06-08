const express = require('express');
const app = express();

// app.use((req, res) => {
//         console.log('We Got A New Request');
//         // res.send('HELLO,WE GOT YOUR REQUEST! THIS YOUR REQUEST');
//         res.send('<h1>HELLO,WE GOT YOUR REQUEST! THIS YOUR REQUEST</h1>');
//     })
// console.dir(app);


app.get('/cats', (req, res) => {
        res.send('<h1>CATS Meow</h1>');
    })
    // Using Params in the URL 
    // EG : http://localhost:3000/cats/1
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} page</h1>`);
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the Post ID: ${postId} on ${subreddit} page</h1>`);
})

// to seaerch us query params in the url E.G /search?q=javascript&sort=new

app.get('/search', (req, res) => {
        const { q } = req.query;
        if (!q) {
            res.send('<h1>Please Enter A Search Query</h1>');
        }
        res.send(`<h1> Search Result for : ${q}!!
         </h1>`);
    })
    // EG : http://localhost:3000/search?q=javascript&sort=new
app.post('/cats', (req, res) => {
    res.send('<h1>This is a post Request!!... This is treated differently</h1>');
})
app.get('/dogs', (req, res) => {
    res.send('<h1>Dogs Wof</h1>');
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome Home</h1>');
})
app.get('*', (req, res) => {
    res.send('<h1>I dontt Know the route to that path</h1>');
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// use nodemon to listen to changes in the code and restart the server automatically when changes are made to the code