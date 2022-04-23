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
let allImages = document.getElementsByTagName('img');
console.dir(allImages)
console.dir(allImages[1]);

for(let img of allImages){
   img.scr = "	https://upload.wikimedia.org/wikipedia/commons/thu…dge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
}
// console.log(allImages);
// let squareImages = document.getElementsByClassName('square');
// for(let img of squareImages){
//     img.src = 'https://picsum.photos/id/1/200/300'
// }

/// querySelector //

// document.querySelector('.square') // for class
// document.querySelector('img: nth-of-type(2)') // to get specific items

// document.querySelector('#banner') // for id
// document.querySelector('a[img]') // for tag name

// // to Select by attribute 

// document.querySelector('a[title= "Java"]')

/// querySelectorAll

document.querySelectorAll('img') // to get all images with d tagName 'img' 
document.querySelectorAll('p a') // for all anchor tags inside paragraphs

let links = document.querySelectorAll('p a'); // to get all anchor tags inside paragraphs and save it to a variable 

for(let link of links){
    console.log(link.href)
}

// let h1 = document.querySelector('h1')
// console.log(h1)

document.querySelector('h1') // to get first h1 tag in the document 

/// innerText 

document.querySelector('h1').textContent // to get text content of h1 tag 

document.querySelector('p').innerText = 'lolololo' // to change text content of p tag 

/// innerText is going to show us everything that shows up on the screen while textCONTENT shows us evrything inside the html file content...
// textContent returns every element in the node. In contrast, 

// innerText is aware of styling and won't return the text of "hidden" elements.
let allLinks = document.querySelector('a').innerHTML;
for(let link of allLinks){
    link.innerText = 'I AM A LINK!!!'} // to change text content of p tag 

    /// innerHTML 
    // innerHTML retrieves all the elements including the tagNames between the opening and closing tags 
    document.querySelector('h1').innerHTML = '<i>fortune</i>' // to change text content of h1 tag 
    document.querySelector('h1').innerHTML += '<sup>praise</sup>'
    document.querySelector('a').innerHTML

    /// Attributes //
    // document.querySelector("#banner").id = 'whoops'
    // document.querySelector("#banner").scr
    // document.querySelector("a").title
    // let firstLink = document.querySelector("a")
    // firstLink.href
/// getAttribute('href')
// firstLink.getAttribute('href')
// /// setAttribute
// firstLink.setAttribute('href','http://www.google.com')
// document.querySelector('input[type="text"]')
// let input = document.querySelector('input[type="text"]') // it can be dynamic
// input.setAttribute('type',"text")


// let link = document.querySelector('a');
// for (let link of allLinks)
// {link.style.color='green'}
 
// to know the actual size of the computed element on the page
// let h1 = document.querySelector('h1')
// window.getComputedStyle(h1).color // you get all the style in css

// get and set class attributes
// let h2 =  document.querySelector('h2');
// h2.getAttribute('class')
// h2.setAttribute('class', 'purple')
// let currentClass = h2.getAttribute('class')
// // currentClass += ' purple'
// currentClass
// h2.setAttribute('class', `${currentClass} + purple`)

/// classList

// h2.classList.add('purple') // to add a class to the element 
// h2.classList.remove('purple')// to remove a class from an element 
// h2.classList.contains('purple') // to check if that class exists or not
// h2.classList.toggle('purple') // it helps to remove or add the class exisiting or none existing class.. to toggle the class

/// Traversing Parent _ Child _ Sibling
// let firstBold = document.querySelector(' b');
// firstBold
// firstBold.parentElement // to get the parent element of the first bold tag
// firstBold.parentElement.parentElement // to get the parent of the parent
// const paragraph = firstBold.parentElement;
// paragraph.childElementCount // to know how many child elements are there in the paragraph
// paragraph.children // to get all the child elements of the paragraph
// paragraph.children[0] // to get the first child element of the paragraph
// paragraph.children[0].parentElement // to get the parent of the first child element of the paragraph

// let squareImg = document.querySelector('.square')
// squareImg.children // to get all the child elements of the squareImg
// squareImg.nextSibling // to get the next sibling of the squareImg
// squareImg.previousSibling // to get the previous sibling of the squareImg
// squareImg.nextElementSibling // to get the next element sibling of the squareImg

// Append & AppendChild //

// document.createElement('img')
// const newImg = document.createElement('img')
// newImg.src = 'https://picsum.photos/id/1/200/300'

// document.body.appendChild(newImg);
// newImg.className.add('square')  
// let newH3 = document.createElement('h3') // to create a new element
// newH3.textContent = 'I am a new h3'

/// Remove Element & removeChild //
let firstLi = document.querySelector('li');
firstLi
let ul = firstLi.parentElement;
ul
ul.removeChild(firstLi) // to remove a child element from the parent element

let img = document.querySelector('img')
img.remove() // to remove the element from the document
document.body.prepend(img); // to add the element to the top of the document


 ///// Pokemons /////

  


