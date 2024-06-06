//Implementing SVM in JS

const words = ['hello','world','how','are','you','doing','today'];

const searchTerms = ['how','if','you'];

function search(words, searchTerms){

    const wordCounts = {};

    for (const word of words){

        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    const searchTermCounts = {};

    // Iterate over the search terms
    for (const term of searchTerms) {
      // Increment the count for the search term
      searchTermCounts[term] = (searchTermCounts[term] || 0) + 1;
    }
  
    // Initialize a hash table to keep track of the matches
    const matches = {};
  
    // Iterate over the words
    for (const word of words) {
      // If the word has any matches
      if (wordCounts[word] >= searchTermCounts[word]) {
        // Add the word to the matches
        matches[word] = true;
      }
    }
  
    // Return the hash table of matches
    return matches;
}



const matches = search(words, searchTerms);

console.log(matches);
