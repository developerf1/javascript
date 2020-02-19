//***************************************************************************/
// Remove element based on value using filter()
//***************************************************************************/
let originalArray = [1, 2, 3, 4, 5];

let filteredArray = originalArray.filter(myValueFilter);

function myValueFilter(value) {
    return value < 3 || value > 4;
}

console.log("Result (myValueFilter): " + filteredArray);


//***************************************************************************/
// Remove element based on index using filter()
//***************************************************************************/
filteredArray = originalArray.filter(myIndexFilter);

function myIndexFilter(value, index) {
    return index !== 2;
}

console.log("Result (myIndexFilter): " + filteredArray);


//***************************************************************************/
// Remove object based on value using filter()
//***************************************************************************/
originalArray = [
    {name: 'John', age: 23, color: 'red'}, 
    {name: 'Ann', age: 21, color: 'blue'}, 
    {name: 'Mike', age: 13, color: 'green'}
];

filteredArray = originalArray.filter(value => value.age > 18);

console.log("Result (objects): " + JSON.stringify(filteredArray));


//***************************************************************************/
// Remove the first element with shift()
//***************************************************************************/
let myArray = [1, 2, 3, 4, 5];
let removedElement = myArray.shift();
console.log("After shift: " + myArray);
console.log("Removed element with shift is: " + removedElement);


//***************************************************************************/
// Remove the last element with pop()
//***************************************************************************/
myArray = [1, 2, 3, 4, 5];
removedElement = myArray.pop();
console.log("After pop: " + myArray);
console.log("Removed element with pop is: " + removedElement);


//***************************************************************************/
// Remove element with splice()
//***************************************************************************/
myArray = [1, 2, 3, 4, 5];
removedElement = myArray.splice(1, 1);
console.log("After splice: " + myArray);
console.log("Removed element with splice(1, 1) is: " + removedElement);


//***************************************************************************/
// Remove multiple elements with splice()
//***************************************************************************/
myArray = [1, 2, 3, 4, 5];
removedElement = myArray.splice(2, 2);
console.log("After splice(2,2): " + myArray);
console.log("Removed elements with splice(2, 2) is: " + removedElement);


//***************************************************************************/
// Remove value with delete()
//***************************************************************************/
myArray = [1, 2, 3, 4, 5];
delete(myArray[2]);
console.log('After delete: ' + myArray);
console.log('Type is: ' + typeof(myArray[2]));