// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "1,2,3,4,5"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");
  
  // Convert the array of strings into an array of numbers.
  const numbers = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
  }

  console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

function getLength(numbers) {
    numbers.toString().length
}

  function getSum(numbers) {
const arr = [1,2,3,4,5]; 
let sum = 0; for (let i = 0; i < arr. length; i++) { sum += arr[i]; } 
console. log(sum);
    }

  function getMean(numbers) {
    const sum = array.reduce((acc, curr) => acc + curr, 0); 
  const average = sum / array.length; 
  return average; 
} 
 const array = [1, 2, 3, 4, 5]; 
const average = calculateAverage(array); 
console.log(average); 
  

  function getMin(numbers) {
    { var min = array[0]; for(var i = 0; i < array. length; i++)
        { if(min < array[i]){ min = min; }
        else if (min > array[i]){ min = array[i + 1]; }
        else if (min == array[i]){ min = min; } } 
    return min; };
  }

  function getMax(numbers) {
    const max= 
  }

  function getRange(numbers) {
        console.log(x) 
    }
    range.map(function (x) {
        return math.sin(x) 
    }) 

  function getEvens(numbers) {
    // Using the operator modulo
    if (num % 2)==0
    console.log(even);
  }

  function getOdds(numbers) {
    num= int (input(1,2,3,4,5))
    if (num % 2)== 0;print("The number is even"); print("The provided number is odd");
    console.log(odd);
  }