class Formatter {
  //add static methods here
  //Write a method static capitalize that takes in a string and capitalizes the first letter.
  static capitalize(string) {
    //take the first character and use toUpperCase() then add the rest of the string
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  //Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]+/g, '')
  }

  //Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(string) {
    //break up the words into an array, if the word is the, a, an, but, of, and, for, at, by, from don't capitalize
    let words = string.split(' ')
    let newString = words.map((word, index) => {
      if (index === 0){
        return (word.charAt(0).toUpperCase() + word.slice(1))
      } 
      else if(word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from"){
        return word
      } 
      else{
        return (word.charAt(0).toUpperCase() + word.slice(1))
      }
    })
    return newString.join(' ')
  }

}