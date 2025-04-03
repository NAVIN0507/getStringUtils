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
//Convert String to Title Case
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}
//Generate a Slug from a String
function toSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
//Mask a String (e.g., Credit Card, Email)
 function maskString(str, visibleCount = 4, maskChar = "*") {
  return maskChar.repeat(str.length - visibleCount) + str.slice(-visibleCount);
}
//Encode & Decode URL Components
export function handleURL(str, type = "encode") {
  return type === "encode" ? encodeURIComponent(str) : decodeURIComponent(str);
}
//Sanitize HTML (Prevent XSS)
 function sanitizeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
//Extract Domain from URL
 function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}
//Validate Email Format
 function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
//Convert Query String to Object ✅
 function parseQueryString(query) {
  return Object.fromEntries(new URLSearchParams(query));
}
//Convert Object to Query String
 function toQueryString(params) {
  return new URLSearchParams(params).toString();
}
//Strip HTML Tags
 function stripHTML(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
//Check if String is a Valid URL
 function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}
// Normalize URL (Ensure HTTP/HTTPS)
function normalizeURL(url) {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
}
//Obfuscate Email (For Privacy Protection)
 function obfuscateEmail(email) {
  return email.replace(/(.)(?=.*@)/g, "*");
}
//Generate Random Hex Color
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Extract Meta Tags from HTML
 function getMetaTagContent(html, metaName) {
  const regex = new RegExp(
    `<meta[^>]+name=["']${metaName}["'][^>]+content=["']([^"']+)["']`,
    "i"
  );
  const match = html.match(regex);
  return match ? match[1] : null;
}
//Convert RGB to HEX
 function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
//Convert HEX to RGB
 function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )})`
    : null;
}
//Detect if a String is a JSON
module.exports = {
  getInitials , 
  getRandomString , 
  toKebaCase,
  toSnakeCase,
  toPascalCase,
  truncateString,
  removeWhitespace,
  toTitleCase,
  toSlug,
  maskString,
  handleURL,
  sanitizeHTML,
  getDomain,
  isValidEmail,
  parseQueryString,
  toQueryString,
  stripHTML,
  isValidURL,
  normalizeURL,
  obfuscateEmail,
  getRandomHexColor,
  getMetaTagContent,
  rgbToHex,
  hexToRgb,
  
}
