"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
function greet(name, id) {
    return "Welcome, ".concat(name, " and your id is ").concat(id);
}
var myGreet = greet("Sahil", 17);
console.log(myGreet);
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin == palin;
};
console.log(isPalindrome("12321"));
function calculateAverage(numbers) {
    if (numbers.length === 0) { ///== AND === strictly equalisation differnece
        throw new console_1.error("Array cannot be empty..");
    }
    var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
    var average = sum / numbers.length;
    return average;
}
var nums = [10, 20, 30, 40, 50];
var avg = calculateAverage(nums);
console.log("The average is ".concat(avg));
function findMaxValue(num1) {
    if (num1.length === 0) {
        throw new console_1.error("Array cannot be empty..");
    }
    var maxNumber = Math.max.apply(Math, num1);
    return maxNumber;
}
var maxVal = findMaxValue(nums);
console.log("max value is ".concat(maxVal));
//Anonymous function
var info = function () {
    console.log("Anonymous function");
};
info();
//Arrow function
var news = function () {
    console.log("News for today");
};
news();
//Asynchronous function
function simulateFetchUser(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // Simulate fetching data with a delay
            if (userId === 1) {
                resolve({ id: 1, name: 'John Doe' });
            }
            else {
                reject('User not found');
            }
        }, 1000); // 1-second delay
    });
}
function fetchUserData(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log('Fetching user data...');
                    return [4 /*yield*/, simulateFetchUser(userId)];
                case 1:
                    user = _a.sent();
                    console.log('User data:', user);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error fetching user data:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Call the async function
fetchUserData(1); // This will print the user data
fetchUserData(2); // This will print an error message
//map: Transforms each element in the array.
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (num) { return num * 2; });
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
//filter: Selects elements that meet certain criteria.
var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = number1.filter(function (num) { return num % 2 === 0; });
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
//reduce: Accumulates a single result from the array elements.
var number2 = [1, 2, 3, 4, 5];
var sum = number2.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(sum); // Output: 15
//push and pop
// push: Adds one or more elements to the end of an array and returns the new length.
//pop: Removes the last element from an array and returns that element.
var arr1 = [1, 2, 3];
arr1.push(4); // arr is now [1, 2, 3, 4]
arr1.pop(); // returns 4, arr is now [1, 2, 3]
//shift: Removes the first element from an array and returns that element.
//unshift: Adds one or more elements to the beginning of an array and returns the new length.
var arr2 = [1, 2, 3];
arr2.shift(); // returns 1, arr is now [2, 3]
arr2.unshift(0); // returns 3, arr is now [0, 2, 3]
//Splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
var arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 1); // removes one element at index 2, arr is now [1, 2, 4, 5]
arr3.splice(2, 0, 3); // adds 3 at index 2, arr is now [1, 2, 3, 4, 5]
// Slice: Returns a shallow copy of a portion of an array into a new array object.
var arr4 = [1, 2, 3, 4, 5];
var newArr = arr4.slice(1, 3); // newArr is [2, 3]
// forEach: Executes a provided function once for each array element.
var arr = [1, 2, 3];
arr.forEach(function (num) { return console.log(num); }); // prints 1 2 3
//charAt: Returns the character at the specified index.
var str = "Hello";
console.log(str.charAt(1)); // "e"
//concat: Combines the text of two strings and returns a new string.
var str1 = "Hello";
var str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
//includes: Determines whether one string may be found within another string, returning true or false as appropriate.
var str4 = "Hello World";
console.log(str4.includes("World")); // true
//split: Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
var arr5 = str4.split(" "); // arr is ["Hello", "World"]
//substring: Returns the part of the string between the start and end indexes, or to the end of the string.
console.log(str4.substring(0, 5)); // "Hello"
// toLowerCase: Returns the calling string value converted to lowercase.
// toUpperCase: Returns the calling string value converted to uppercase.
console.log(str4.toLowerCase()); // "hello world"
console.log(str4.toUpperCase()); // "HELLO WORLD"
//keys: Returns an array of a given object's own enumerable property names.
var obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
//values: Returns an array of a given object's own enumerable property values.
console.log(Object.values(obj)); // [1, 2, 3]
//entries: Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
//JSON.stringify: Converts a JavaScript object or value to a JSON string.
var jsonString = JSON.stringify(obj); // jsonString is '{"a":1,"b":2,"c":3}'
//JSON.parse: Parses a JSON string, constructing the JavaScript value or object described by the string.
var jsonString1 = '{"a":1,"b":2,"c":3}';
var obj1 = JSON.parse(jsonString1); // obj is {a: 1, b: 2, c: 3}
// now: Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
var milliseconds = Date.now();
console.log(milliseconds);
// toISOString: Converts a date to a string following the ISO 8601 extended format.
var now = new Date();
console.log(now.toISOString());
// getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds: Returns the respective components of a date.
console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 0-11 (0 = January)
console.log(now.getDate()); // 1-31
console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59
console.log(now.getSeconds()); // 0-59
