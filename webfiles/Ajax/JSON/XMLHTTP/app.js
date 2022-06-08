const req = new XMLHttpRequest();

req.onload = function() {
    console.log('All DOne with Request!!!')
    const datal = JSON.parse(this.responseText);
    console.log(datal.data.movie_count);
    console.log(this);
}

req.onerror = function() {
    console.log('Error!!')
    console.log(this);
}

req.open('GET', 'https://yts.mx/api/v2/list_movies.json'),
    req.send();