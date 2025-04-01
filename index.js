/**
 * Returns the first 'length' characters of the given word.
 * @param {string} word - The input word.
 * @param {number} length - The number of characters to extract.
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


module.exports = getInitials
