 const add = (x, y) => x + y;
 //  module.exports = (x, y) => x + y;

 const PI = 3.14159;
 //  module.exports = 3.14159;

 const square = x => x * x;
 //  module.exports = x => x * x;
 const math = {
     add: add,
     PI: PI,
     square: square
 }


 module.exports = math;
 //  module.exports.add = add;
 // module.exports.PI = PI;
 // module.exports.square = square;