// fetch('https://yts.mx/api/v2/list_movies.json').then(
//     res => {
//         console.log('Response, Waiting to Parse...', res)
//         return res.json()
//     }
// ).then(data => {
//     console.log('Parsed Data', data)
//     console.log(data.data.movie_count)
// }).catch(e => {
//     console.log(' Oh No Error', e);
// })

//----We Previously used XMLHttpRequest to make a request to a server. 
//-----with the fetch API, we can make a request to a server and get the response as a promise.

const fetchMovie = async() => {
    try {
        const res = await fetch('https://yts.mx/api/v2/list_movies.json')

        const data = await res.json();
        console.log(data.data.movie_count);

    } catch (e) {
        console.log('Something Went Wrong!', e);
    }
}
console.log(fetchMovie());

///----- We used Async Await to make our code more readable. we can use await to wait for a promise to resolve.