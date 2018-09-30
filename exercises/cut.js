'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(str){
    let strArr = str.split('');
    let newStr = "";
    for(let i=2;i<strArr.length;i++){

        newStr += strArr[i];
    }

    return newStr;
}
function cutLast(str){
    let strArr = str.split('');
    let newStr = "";
    for(let i = 0;i<=strArr.length-3;i++){

        newStr += strArr[i];
    }

    return newStr;
}

function cutFirstLast(str){

    let strArr = str.split('');
    let newStr = "";
    
    for(let i=2;i<=strArr.length-3;i++){

        newStr += strArr[i];
    }
   

    return newStr

}
//* Begin of tests
const assert = require('assert')

//assert.fail('You must write your own tests')
assert.strictEqual(cutFirst("hada"),"da")
assert.strictEqual(cutLast("hada"),"ha")
assert.strictEqual(cutFirstLast("hadaaika"),"daai")
// End of tests */
