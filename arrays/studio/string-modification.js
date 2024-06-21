const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let moddedStr = str.slice(3, str.length) + str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The orginal string is ${str} and the modified string is ${moddedStr}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let relocationValue = input.question("How many letters to relocate?")
moddedStr = str.slice(Number(relocationValue), str.length) + str.slice(0, Number(relocationValue));
console.log(`The orginal string is ${str} and the modified string is ${moddedStr}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (relocationValue <= str.length) {
    moddedStr = str.slice(Number(relocationValue), str.length) + str.slice(0, Number(relocationValue));
    console.log(`The orginal string is ${str} and the modified string is ${moddedStr}`);
} else {
    let moddedStr = str.slice(3, str.length) + str.slice(0, 3);
    console.log(`Number entered too long, 3 used as default: The orginal string is ${str} and the modified string is ${moddedStr}`);
}