// String.prototype.yell = function() {
//     return `OMG!!! ${this.toUpperCase()}!!!! AGAGAG`;
// };
// console.log('Hello'.yell());

// Array.prototype.pop = function() {

//     return 'Sorry i Waill not pop'
// }

// console.log([1, 2, 3].pop);


function hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}
// rgb(255, 100, 25);
// console.log(hex(255, 100, 25));
// console.log(rgb());
// '#ff6419',
// 'rgb(255,100,35)'

function makeColor(r, g, b) {
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        /// instead of 
        // return `rgb(${this.r}, ${this.g}, ${this.b})`;

        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 255)
console.log(

    firstColor.rgb(),
    firstColor.hex()
);