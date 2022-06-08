// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'green';
// }, 3000)

////------Nesting Them(Nesting function)-------//

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//         }, 1000)
//     }, 1000)
// }, 1000)

////------Extracting all into a function------////

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('olive', 1000, () => {
    delayedColorChange('red', 1000, () => {
        delayedColorChange('white', 1000, () => {
            delayedColorChange('green', 1000, () => {

            });
        });
    });
});

///---- using Fake Movie Api ---///
searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works, run this;
    }, () => {
        // if it doesnt work run this
    })
}, () => {
    // if API is down, or request failed ---//
})