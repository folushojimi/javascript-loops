
//FOR IN LOOPS

let numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i]*2
}

console.log(numbers)


//creating a loop that shows it result in a new array, so we are simply pushing our result into a new array

let newNumbers = [4, 5, 6, 7, 8, 9, 10]

let double = []

for(let i = 0; i < newNumbers.length; i++){
    double.push(newNumbers[i] * 3)
}

console.log(double)


//FOR OF LOOP

const login = [
    {label:"username", type:'text'}, 
    {label:"password", type:'password'},
]

const initialState = {};

let peoples = ['emmanuel', 'morayo', 'bosun']

for(let logs of login){
    initialState[logs.label]=''
}

console.log(initialState)