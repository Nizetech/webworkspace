// new Keyword Creates a blank, Plain JavaScript object;
// Links (sets the constructor of) this object to another context;
// Passes the newly created object from step1as this context;
//Returns this if the function doesnt return its own object.

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}


Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b},${a})`;
};


let color1 = new Color(40, 50, 90);
let color2 = new Color(0, 0, 0);
document.body.style.backgroundColor = color1.rgb()
document.body.style.backgroundColor = color1.rgba(0.6)

console.log(color1.hex());
console.log(color2.rgb());