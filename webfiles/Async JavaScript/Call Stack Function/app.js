let multiply = (x, y) => x * y;

let square = x => multiply(x, x);

let isRightTriangle = (a, b, c) => {
    square(a) + square(b) === square(c)
}

console.log('Before')

console.log(isRightTriangle(3, 4, 5));

console.log('After')