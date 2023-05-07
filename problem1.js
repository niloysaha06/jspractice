// const tips_omitBy = (obj, fn) =>
//   Object.keys(obj)
//     .filter(k => !fn(obj[k], k))
//     .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

// console.log(tips_omitBy({ a: 2, b: '4', c: 7 }, x => typeof x === 'number'));



// function performOperation(secondInteger, secondDecimal, secondString) {
//     const firstInteger = 4
//     console.log(firstInteger + (parseInt(secondInteger)))

//     const firstDecimal = 4.0;
//     console.log(firstDecimal + (parseFloat(secondDecimal)))

//     const firstString = "HackerRank";
//     console.log(firstString + secondString)

// }

//  performOperation(12, 4.32, "is the best place to learn and practice coding!" )


// is_array = function(input) {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;   
//       };
//   console.log(is_array('w3resource'));
//   console.log(is_array([1, 2, 4, 0]));



function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width
  
  return area;
}
console.log(getArea(3, 4.5))


function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * (length + width)
  
  return perimeter;
}

console.log(getPerimeter(3, 4.5))











