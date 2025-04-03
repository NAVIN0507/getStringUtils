/**
 * Returns the first 'length' characters of the given word.
 * @param {string} word - The input word.
 * @param {number} length - The number of characters to extract.
 * @param {string} str
 * @returns {string} - The extracted initials.
 */
function getInitials(word, length) {
  return word
    .split(/\s+/) // Split by any whitespace (spaces, tabs, newlines)
    .filter((part) => part.length > 0) // Remove empty parts
    .map((part) => part[0].toUpperCase()) // Get first letter & uppercase
    .join("") // Combine initials
    .slice(0, length); // Take the first 'length' characters
}

function getRandomString(length){
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let string = "";
    for(let i =0;i<length;i++){
      const reandomCharcters  = Math.floor(Math.random()*characters.length);
      string += characters[reandomCharcters];
    }
    return string;
}

function toKebaCase(str){
  return str.replace(/\s+/g, "-").toLowerCase();
}

//Convert the String into Snake case
 function toSnakeCase(str) { //Hello world --> Hello_world
  return str.replace(/\s+/g, "_").toLowerCase();
}
//Convert the String into Pascal Case
 function toPascalCase(str) { //helloworld --> HelloWorld
  return str 
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replace(/\s+/g, "");
}

//Truncate String 
function truncateString(str, length) { 
  //Hello World 2 --> He..........
  return str.length > length ? str.slice(0, length) + "..." : str;
}

//Remove White Space
function removeWhitespace(str) {
  //Hello World --> HelloWorld
  return str.replace(/\s+/g, "");
}

module.exports = {
  getInitials , 
  getRandomString , 
  toKebaCase,
  toSnakeCase,
  toPascalCase,
  truncateString,
  removeWhitespace
}
