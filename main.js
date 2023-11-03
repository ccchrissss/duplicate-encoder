function duplicateEncode(word){

  word = word.toLowerCase().split('')
  // console.log(word)
  let newString = []

  for (let i = 0; i < word.length; i++) {
    word.indexOf(word[i]) === word.lastIndexOf(word[i]) ? newString.push('(') : newString.push(')')
  }

  return newString.join('')
}


console.log('hello: ', duplicateEncode('hello'))
// results in '(())('

console.log('Success: ', duplicateEncode('Success'))


// parameters: word   // a string
// return: string   // with letters replaced by '(' or ')'
// e.g. duplicateEncode('hello')
// results in '(())('


// declare a variable newStrinng and assignn it to an empty string ''
// loop through the word string
// if the first index of word.charAt(i) equals the last innndex of word.charAt(i) then concatenate '(' to newString
// else concatenate ) to newString
// end loop
// return newString

