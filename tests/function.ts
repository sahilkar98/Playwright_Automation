//Named functions
import { error } from "console";

function greet (name: string, id: number): string{
return `Welcome, ${name} and your id is ${id}`
}

const myGreet = greet("Sahil", 17);
console.log(myGreet);


const isPalindrome = (palin: string):boolean => {
    let myPalin= palin.split("").reverse().join("");
    return myPalin == palin
}

console.log(isPalindrome("12321"));

function calculateAverage(numbers: number[]): number{
    if(numbers.length === 0){                   ///== AND === strictly equalisation differnece
        throw new error("Array cannot be empty..");
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum/numbers.length;
    return average;
}

const nums = [10, 20, 30, 40, 50];
const avg = calculateAverage(nums);
console.log(`The average is ${avg}`);


function findMaxValue(num1: number[]): number{
    if(num1.length === 0){
        throw new error("Array cannot be empty..");
    }

    const maxNumber = Math.max(...num1);
    return maxNumber;
}

const maxVal = findMaxValue(nums);
console.log(`max value is ${maxVal}`);

//Anonymous function
let info = function(){
    console.log("Anonymous function")
}

info();

//Arrow function
let news = () => {
    console.log("News for today")
}

news();

//Asynchronous function
function simulateFetchUser(userId: number): Promise<{ id: number, name: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate fetching data with a delay
            if (userId === 1) {
                resolve({ id: 1, name: 'John Doe' });
            } else {
                reject('User not found');
            }
        }, 1000); // 1-second delay
    });
}


async function fetchUserData(userId: number): Promise<void> {
    try {
        console.log('Fetching user data...');
        
        // Use await to wait for the promise to resolve
        const user = await simulateFetchUser(userId);
        
        console.log('User data:', user);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Call the async function
fetchUserData(1); // This will print the user data
fetchUserData(2); // This will print an error message


//map: Transforms each element in the array.
const numbers: number[] = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//filter: Selects elements that meet certain criteria.
const number1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = number1.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//reduce: Accumulates a single result from the array elements.
const number2: number[] = [1, 2, 3, 4, 5];
const sum = number2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

//push and pop
// push: Adds one or more elements to the end of an array and returns the new length.
//pop: Removes the last element from an array and returns that element.
let arr1: number[] = [1, 2, 3];
arr1.push(4); // arr is now [1, 2, 3, 4]
arr1.pop(); // returns 4, arr is now [1, 2, 3]


//shift: Removes the first element from an array and returns that element.
//unshift: Adds one or more elements to the beginning of an array and returns the new length.
let arr2: number[] = [1, 2, 3];
arr2.shift(); // returns 1, arr is now [2, 3]
arr2.unshift(0); // returns 3, arr is now [0, 2, 3]


//Splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let arr3: number[] = [1, 2, 3, 4, 5];
arr3.splice(2, 1); // removes one element at index 2, arr is now [1, 2, 4, 5]
arr3.splice(2, 0, 3); // adds 3 at index 2, arr is now [1, 2, 3, 4, 5]


// Slice: Returns a shallow copy of a portion of an array into a new array object.
let arr4: number[] = [1, 2, 3, 4, 5];
let newArr = arr4.slice(1, 3); // newArr is [2, 3]

// forEach: Executes a provided function once for each array element.
let arr: number[] = [1, 2, 3];
arr.forEach(num => console.log(num)); // prints 1 2 3

//charAt: Returns the character at the specified index.
let str: string = "Hello";
console.log(str.charAt(1)); // "e"

//concat: Combines the text of two strings and returns a new string.
let str1: string = "Hello";
let str2: string = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

//includes: Determines whether one string may be found within another string, returning true or false as appropriate.
let str4: string = "Hello World";
console.log(str4.includes("World")); // true

//split: Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
let arr5 = str4.split(" "); // arr is ["Hello", "World"]

//substring: Returns the part of the string between the start and end indexes, or to the end of the string.
console.log(str4.substring(0, 5)); // "Hello"

// toLowerCase: Returns the calling string value converted to lowercase.
// toUpperCase: Returns the calling string value converted to uppercase.
console.log(str4.toLowerCase()); // "hello world"
console.log(str4.toUpperCase()); // "HELLO WORLD"


//keys: Returns an array of a given object's own enumerable property names.
let obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj)); // ["a", "b", "c"]

//values: Returns an array of a given object's own enumerable property values.
console.log(Object.values(obj)); // [1, 2, 3]

//entries: Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

//JSON.stringify: Converts a JavaScript object or value to a JSON string.
let jsonString = JSON.stringify(obj); // jsonString is '{"a":1,"b":2,"c":3}'

//JSON.parse: Parses a JSON string, constructing the JavaScript value or object described by the string.
let jsonString1= '{"a":1,"b":2,"c":3}';
let obj1 = JSON.parse(jsonString1); // obj is {a: 1, b: 2, c: 3}

// now: Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
let milliseconds = Date.now();
console.log(milliseconds);

// toISOString: Converts a date to a string following the ISO 8601 extended format.
let now = new Date();
console.log(now.toISOString());

// getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds: Returns the respective components of a date.
console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 0-11 (0 = January)
console.log(now.getDate()); // 1-31
console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59
console.log(now.getSeconds()); // 0-59