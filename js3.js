//Longest Substring without Repeating Chars 

function lengthOfLongestSubstring(s){
    let map = {};
    let start = 0;
    let maxLength = 0; 

    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if (map[char] >= start){

            start = map[char] + 1;
        }
        map[char] = i; 
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
