

function removeNums (arr){ // function created to remove numbers with arr passed an argument for arrays


let noNumbers = [] // empty array declared to push array strings without numbers, reserved to be used with for loop
    let i // variable delclared to represent array index
for(i=0;i<arr.length;i++){ // for loop to loop through array declared in function arguments

let noNumber = arr[i].replaceAll(/\d/ig,"") 
    
    //variable declared to replace all digits, with a blank string that has no spaces, for each array element at the index of the value at i, using the replaceAll method
    //digits are targeted using regular expressions
noNumbers.push(noNumber) // strings without digits are then pushed to the noNumbers variable 
}
return noNumbers // returns array with numbers removed from all it's items
}



let array = ["Moral0","G1ift","S1idzing5a", "33Emi9ly","Ca00nd7ice"] //example


console.log(removeNums (array))



