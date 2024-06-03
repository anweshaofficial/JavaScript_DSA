//First Non Repeating Character 

function firstNonRepeatingCharacter(str) {

    const charCount = {}; 

    for (let char of str){ 
        charCount[char] = (charCount[char] || 0) + 1

    }

    for (let char of str){
        if (charCount[char] === 1){
            return char; 
        }
    }

    return null; 
}

//Test Case

console.log(firstNonRepeatingCharacter("aabbccd")) // "d"
console.log(firstNonRepeatingCharacter("aabbccddee")) // null
console.log(firstNonRepeatingCharacter("aabbccddeef")) // "f"

