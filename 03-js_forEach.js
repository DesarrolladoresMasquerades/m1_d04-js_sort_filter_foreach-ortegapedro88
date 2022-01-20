// Class code examplesconst s

students = [
    { firstName: 'John', lastName: 'Carr', age: 34 },
    { firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21 },
    { firstName: 'Sarah', lastName: "O'Connor", age: 45 }
]

students.forEach( console.log )



const greetings = []

const printOlderThan25 = (person)=>{
    if(person.age >= 25){
        greetings.push(`Hello ${person.firstName}`)
    }
}

students.forEach( printOlderThan25 )


const numberArray = [1,2,3,4,5,6,7,8,9]

const printOddindexElemnts = (ele, index)=>{
    if(index % 2 !== 0) console.log(`Element ${ele} is in an odd index`)
}

numberArray.forEach( printOddindexElemnts)


console.log(greetings)