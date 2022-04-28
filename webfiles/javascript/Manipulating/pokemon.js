// newImg.scr = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

let container = document.querySelector('#container');
let baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// let newImg = document.createElement('img');
// newImg.src = 
// container.appendChild(newImg);

for(i = 0; i <= 150; i++ ){
    let pokeman = document.createElement('div');
    let newImg = document.createElement('img');
    let label = document.createElement('span');
    label.innerText = `${'username'}`;
    pokeman.classList.add('pokeman');
    newImg.src = `${baseUrl}${i}.png`;
    container.appendChild(newImg);

    pokeman.appendChild(newImg); 
    pokeman.appendChild(label);
    container.appendChild(pokeman);

}

{/* <div>
    <img>
    <span>2</span>
    </img>

</div> */}