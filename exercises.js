const BST = require('./BST');

// Questions:
/*
  1. 
  A. Draw BST with 3,1,4,6,9,2,5,7: https://drive.google.com/file/d/1HGvVvG7VB6vE0EZRViIb4TJAln8g7KI-/view?usp=sharing 
  B. Draw BST with keys E A S Y Q U E S T I O N: https://drive.google.com/file/d/13b-7d8xO-b6kqw9v3XEluuj9avigmXzB/view?usp=sharing 
  C. Remove root from first tree: https://drive.google.com/file/d/1ug1w6Q_dYBR1QwJokEYG-VU5jc9AkFv3/view?usp=sharing
  D. Remove root from second tree: https://drive.google.com/file/d/1JyZWYJy5SiCR0m3bmjKwd4v079hC4hxN/view?usp=sharing 
*/

function main() {
  const numBST = new BST();
  [3,1,4,6,9,2,5,7].forEach(num => numBST.insert(num, num));

  const charBST = new BST();
  ["E","A","S","Y","Q","U","E","S","T","I","O","N"]
    .forEach(char => charBST.insert(char, char));

    numBST.remove(3);
    charBST.remove('E');


  return [numBST, charBST];
  }

  const numBST = main()[0];
  const charBST = main()[1];

  console.log(numBST);
  console.log(charBST);