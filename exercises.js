const BST = require('./BST');

// Questions:
/*
  1. 
  A. Draw BST with 3,1,4,6,9,2,5,7: 
  https://drive.google.com/file/d/1HGvVvG7VB6vE0EZRViIb4TJAln8g7KI-/view?usp=sharing 
  B. Draw BST with keys E A S Y Q U E S T I O N: 
  https://drive.google.com/file/d/13b-7d8xO-b6kqw9v3XEluuj9avigmXzB/view?usp=sharing 
  2.
  A. Remove root from first tree: 
  https://drive.google.com/file/d/1ug1w6Q_dYBR1QwJokEYG-VU5jc9AkFv3/view?usp=sharing
  B. Remove root from second tree: 
  https://drive.google.com/file/d/1JyZWYJy5SiCR0m3bmjKwd4v079hC4hxN/view?usp=sharing
  3. (see main()) 
  4. 
  A. What does this program do?
  tree(t) takes in a BST.  If the root node is empty, it returns 0.  
  If not, it goes through each node and recursively adds all the 
  values in the nodes together.
  B. If a tree with 3,2,4 ingested were passed to tree(), 
  it would, add 3, call itself, add 2 (and 0, 0 for l/r nodes), 
  call itself, add 4 (and 0, 0 for l/r nodes), and unwind to add the three
  values together and return 9.
  C. Time Complexity
  Best case with tree empty: O(1)
  Average/Worst case of having to go through entire tree: O(n)

  
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

