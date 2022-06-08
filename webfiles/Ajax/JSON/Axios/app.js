// axios.get('https://yts.mx/api/v2/list_movies.json')
//     .then(res => {
//         console.log(res.data.data.movie_count);
//     })
//     .catch(e => {
//         console.log('Something Went Wrong!', e);
//     });

///--It is a promise based it is buillt on the promise object.

// const fetchMovie = async() => {
//     try {
//         const res = await axios.get('https://yts.mx/api/v2/list_movies.json')
//         console.log(res.data.data.movie_count)
//     } catch (e) {
//         console.log('Error!', e)
//     }
// }
// console.log(fetchMovie)

const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } } //--- this is used to add more than one query but might be ignored/// Its a query string object which uses the name params
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
})

const makeImages = (shows) => {
    for (let result of shows) {
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        document.body.appendChild(img);
    }
}