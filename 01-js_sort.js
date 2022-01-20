// Class code examples

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// console.log("before:" , numbers)

// numbers.sort()

// console.log("after: ", numbers)

// console.log(typeof numbers[0]) // Elements stay as numbers 

// console.log(numbers === numbers.sort()) // Array stays the same "box"


//passong the sorting criteria - using a function

//Rules are that Two elements will be given to your function, and your function must return -1, 0 or 1 according to wether the element1 is smaller equal or greater than the element2.

function sortMyNumbers(element1, element2){
    if(element1 < element2) return -1
    if(element1 === element2) return 0
    if(element1 > element2) return 1
}

//function sortMyNumbers1(element1, element2){
    // if(element1 < element2) return -1
    // if(element1 === element2) return 0
    // if(element1 > element2) return 1

const sortedNumbers = numbers.sort(sortMyNumbers)
//const sortedNumbers1 = numbers.sort(sortMyNumbers1)
console.log("sortedNumbers: ", sortedNumbers)
//console.log("sortedNumbers1: ", sortedNumbers1)

function quickSort(el1, el2){
    return el1 - el2
}


const students = [
	{firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Sarah', lastName: 'O\'Connor', age: 45},]


  function sortStudentsByAge (student1, student2) {
      if(student1.age < student2) return -1
      if(student1.age === student2.age) return 0
      if(student1.age > student2.age) return 1
  }

  function sortByageQuick (student1, student2){
      return parseInt(student1.age) - parseInt(student2.age)
  }

  console.log("students by age: ", students.sort(sortByageQuick))