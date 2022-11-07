import colors from 'colors';
import lookup from './dictionary.js';

const text = "The quick brown fox jermps over the lazy dog";

//❓❓ LAB QUESTION 9
//Split the text into an array of words
let wordsArray = text.split(" ");
//Make each word lowercase ❓❓ LAB QUESTION 10
wordsArray = wordsArray.map( s => s.toLowerCase() );
//Make each misspelled word red
wordsArray = wordsArray.map( s => lookup(s)?s.green:s.red );
//Join the array back into a single string
let output1 = wordsArray.join(" ");
//Print it
console.log("Output 1 is: ", output1);

//❓❓ LAB QUESTION 11
let output2 = 
    text.split(" ")
        .map( s => s.toLowerCase() )
        .map( s => lookup(s)?s.green:s.red)
        .join(" ");
//console.log("Output 2 is: ", output2);






