/// First Recurring Char in a string 

//Given a string, find first recurrring character in it 

function firstRecur(input){

    let charSet = new Set ();

    for(let i = 0; i < input.length; i++){
        if (charSet.has(input[i])){
            return input[i];
        }
        charSet.add(input[i]);
    }
    return null;
}

console.log(firstRecur("aabbcc"));

