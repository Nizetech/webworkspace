// c onst allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

/// My Javascript (practice)

document.getElementById('banner'); // to get specific element by id
document.getElementsByTagName('img');
/// it produced a list(array) of images with d tagName 'img'
document.getElementsByTagName('img')[2];

// or save it to a variable
const allImages = document.getElementsByTagName('img');
console.dir(allImages)
console.dir(allImages[1]);

for(let img of allImages){
    console.log(img.scr)
}

