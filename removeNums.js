

function removeNums (arr){


let noNumbers = []
    let i
for(i=0;i<arr.length;i++){

let noNumber = arr[i].replaceAll(/\d/ig,"")
noNumbers.push(noNumber)
}
return noNumbers
}



let array = ["Moral0","G1ift","S1idzing5a", "33Emi9ly","Ca00nd7ice"]


console.log(removeNums (array))



