
/*
Lecture 5:- Using Node app to compute the perimeter and area of a Rectangle


Instead of writing these codes directly we separate them and import it from rectangle.js using file based module below after the var rect declaration.
*/

// var rect = {
//    perimeter: (x, y) => (2 * (x + y)),
//    area: (x, y) => (x * y)
// };


// //Lecture 5: Continue by Importing rectangle.js module 
// var rect = require('./rectangle'); //Importing calculation of perimeter and area from rectangle.js 

// function solveRect(l, b) {
//    console.log("Solving for rectangle with l = " + l + " and b = " + b);

//    if( l <= 0 || b <= 0) {
//       console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and b =" + b);
//    }
//    else {
//       console.log("The area of the rectangle is " + rect.area(l, b));
//       console.log("The perimeter of the rectangle is " + rect.perimeter(l, b));
//    }
// }
// solveRect(2, 4);
// solveRect(3, 5);
// solveRect(0, 5);
// solveRect(-3, 5);



/*
Lecture 5: Part 2 :- Module Call back & Error Handling codes in rectangle.js 
*/

var rect = require('./rectangle');

function solveRect(l, b) {
   console.log("Solving for rectangle with l = " + l + "and b = " + b)

   rect(l, b, (err, rectangle) => {
      if (err) {
         console.log("ERROR: ", err.message);
      }
      else {
         console.log("The area of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.area());

         console.log("The perimeter of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.perimeter());
      }
   });
   console.log("This statement is after the call to rect()");
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);

