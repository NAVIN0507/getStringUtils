# 📜 String Utilities - @navin0507/string-utilsmns

A lightweight and powerful **string utility package** for JavaScript & TypeScript. It provides essential string manipulation functions for **web development** and **general programming**.

## 🚀 Features
✔ Extract initials from a string  
✔ Convert strings to different cases (kebab-case, PascalCase, snake_case)  
✔ Generate random strings and slugs  
✔ Sanitize HTML & validate URLs  
✔ Encode/decode URLs & handle query strings  
✔ Format and transform text easily  

---

## 📦 Installation
Install via **npm**:
```sh
npm install @navin0507/string-utilsmns
```
or via **yarn**:
```sh
yarn add @navin0507/string-utilsmns
```

---

## 🚀 Usage
Import functions in your **JavaScript** or **TypeScript** project:
```js
const { getInitials, toKebaCase, isValidEmail } = require('@navin0507/string-utilsmns');

// Extract initials
console.log(getInitials("John Doe", 2)); // Output: JD

// Convert to kebab-case
console.log(toKebaCase("Hello World")); // Output: hello-world

// Validate Email
console.log(isValidEmail("test@example.com")); // Output: true
```

---

## 📚 Functions & Use Cases

| **Function** | **Description** | **Example Usage** |
|-------------|----------------|--------------------|
| `getInitials(str, length)` | Extracts initials from a name | `getInitials("John Doe", 2)` → `"JD"` |
| `getRandomString(length)` | Generates a random alphanumeric string | `getRandomString(8)` → `"aB9xT3pL"` |
| `toKebaCase(str)` | Converts string to kebab-case | `toKebaCase("Hello World")` → `"hello-world"` |
| `toSnakeCase(str)` | Converts string to snake_case | `toSnakeCase("Hello World")` → `"hello_world"` |
| `toPascalCase(str)` | Converts string to PascalCase | `toPascalCase("hello world")` → `"HelloWorld"` |
| `truncateString(str, length)` | Truncates string with `...` | `truncateString("Hello World", 5)` → `"Hello..."` |
| `removeWhitespace(str)` | Removes all whitespace from string | `removeWhitespace("Hello World")` → `"HelloWorld"` |
| `toTitleCase(str)` | Converts to Title Case | `toTitleCase("hello world")` → `"Hello World"` |
| `toSlug(str)` | Converts string to a slug | `toSlug("Hello World!")` → `"hello-world"` |
| `maskString(str, visibleCount, maskChar)` | Masks a string (e.g., credit card, email) | `maskString("12345678", 4, "*")` → `"****5678"` |
| `handleURL(str, type)` | Encodes or decodes a URL | `handleURL("Hello World!", "encode")` → `"Hello%20World%21"` |
| `sanitizeHTML(str)` | Escapes HTML to prevent XSS attacks | `sanitizeHTML('<script>alert("XSS")</script>')` → `"&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"` |
| `getDomain(url)` | Extracts domain from a URL | `getDomain("https://example.com/page")` → `"example.com"` |
| `isValidEmail(email)` | Validates email format | `isValidEmail("test@example.com")` → `true` |
| `parseQueryString(query)` | Converts query string to an object | `parseQueryString("name=John&age=25")` → `{ name: "John", age: "25" }` |
| `toQueryString(params)` | Converts an object to a query string | `toQueryString({ name: "John", age: 25 })` → `"name=John&age=25"` |
| `stripHTML(str)` | Removes all HTML tags | `stripHTML("<p>Hello</p>")` → `"Hello"` |
| `isValidURL(str)` | Checks if a string is a valid URL | `isValidURL("https://google.com")` → `true` |
| `normalizeURL(url)` | Ensures URL has `http://` or `https://` | `normalizeURL("google.com")` → `"https://google.com"` |
| `obfuscateEmail(email)` | Hides email partially for privacy | `obfuscateEmail("test@example.com")` → `"****@example.com"` |
| `getRandomHexColor()` | Generates a random hex color | `getRandomHexColor()` → `"#a3f4c9"` |
| `rgbToHex(r, g, b)` | Converts RGB to HEX color | `rgbToHex(255, 0, 0)` → `"#ff0000"` |
| `hexToRgb(hex)` | Converts HEX to RGB color | `hexToRgb("#ff0000")` → `"rgb(255, 0, 0)"` |
| `isJSON(str)` | Checks if a string is valid JSON | `isJSON('{"name":"John"}')` → `true` |
| `addOrdinalSuffix(num)` | Adds ordinal suffix to a number | `addOrdinalSuffix(21)` → `"21st"` |
| `markdownToHTML(markdown)` | Converts basic markdown to HTML | `markdownToHTML("**Bold**")` → `"<b>Bold</b>"` |

---

## 🛠️ Contributing
Want to contribute? Awesome! 🎉  
Follow these steps:  
1. **Fork** the repository  
2. **Clone** your fork:  
   ```sh
   git clone https://github.com/NAVIN0507/getStringUtils.git
   ```
3. **Create a branch**:  
   ```sh
   git checkout -b feature-new-function
   ```
4. **Make your changes** & **commit**:  
   ```sh
   git commit -m "Added new string utility function"
   ```
5. **Push & Create a PR**:  
   ```sh
   git push origin feature-new-function
   ```
   Open a Pull Request (PR) on GitHub 🚀

---

## 📜 License
This package is licensed under the **ISC License**.  
You are free to use, modify, and distribute it **with attribution**.  

```
ISC License

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

### **📢 Enjoy coding! If you like this package, don't forget to ⭐ it on GitHub!** 🚀
