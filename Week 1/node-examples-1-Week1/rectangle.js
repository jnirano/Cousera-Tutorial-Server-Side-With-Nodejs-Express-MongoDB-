
/*LECTURE 5 Part1:- Exporting perimeter and area
*/
// exports.perimeter = (x, y) => (2 * (x + y));
// exports.area = (x, y) => (x * y);



/*
LECTURE5: Part 2 :- Module Call back & Error Handling
*/
module.exports = (x, y, callback) => {
   if (x <= 0 || y <= 0) {
      setTimeout(() => callback(new Error("Rectangle dimensions should be greater than zero: l = " + x + ", and b = " + y), null), 2000);
   }
   else {
      setTimeout(() => callback(null, {
         perimeter: () => (2 * (x + y)),
         area: () => (x * y)
      }), 2000);
   }
}