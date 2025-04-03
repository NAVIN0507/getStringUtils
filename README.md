# String Utilities 📜

A simple and lightweight **string utility package** for JavaScript and TypeScript.

## 🚀 Features
- Extract initials from a string
- Format strings easily
- Various string manipulation functions for web development
- More utilities coming soon!

## 📦 Installation

```sh
npm install string-utilsmns
```

## 📖 Available Functions

| Function | Description | Usage Example |
|----------|-------------|---------------|
| `getInitials(word, length)` | Extracts initials from a string | `getInitials("Hello World", 2) // "HW"` |
| `getRandomString(length)` | Generates a random alphanumeric string | `getRandomString(8) // "aB3dE9Gh"` |
| `toKebabCase(str)` | Converts a string to kebab-case | `toKebabCase("Hello World") // "hello-world"` |
| `toSnakeCase(str)` | Converts a string to snake_case | `toSnakeCase("Hello World") // "hello_world"` |
| `toPascalCase(str)` | Converts a string to PascalCase | `toPascalCase("hello world") // "HelloWorld"` |
| `truncateString(str, length)` | Truncates a string with "..." if it exceeds the given length | `truncateString("Hello World", 5) // "Hello..."` |
| `removeWhitespace(str)` | Removes all whitespace from a string | `removeWhitespace("Hello World") // "HelloWorld"` |
| `toTitleCase(str)` | Converts a string to Title Case | `toTitleCase("hello world") // "Hello World"` |
| `toSlug(str)` | Generates an SEO-friendly slug from a string | `toSlug("Hello World!") // "hello-world"` |
| `maskString(str, visibleCount, maskChar)` | Masks a string (e.g., credit card, email) | `maskString("1234567890", 4, "*") // "******7890"` |
| `handleURL(str, type)` | Encodes or decodes a URL component | `handleURL("Hello World", "encode") // "Hello%20World"` |
| `sanitizeHTML(str)` | Removes potentially harmful HTML to prevent XSS | `sanitizeHTML("<script>alert('XSS')</script>") // "&lt;script&gt;alert('XSS')&lt;/script&gt;"` |
| `getDomain(url)` | Extracts the domain from a URL | `getDomain("https://example.com/path") // "example.com"` |
| `isValidEmail(email)` | Checks if an email is valid | `isValidEmail("test@example.com") // true` |
| `parseQueryString(query)` | Converts a query string to an object | `parseQueryString("name=John&age=30") // { name: "John", age: "30" }` |
| `toQueryString(params)` | Converts an object to a query string | `toQueryString({ name: "John", age: 30 }) // "name=John&age=30"` |
| `stripHTML(str)` | Removes all HTML tags from a string | `stripHTML("<p>Hello</p>") // "Hello"` |
| `isValidURL(str)` | Checks if a string is a valid URL | `isValidURL("https://example.com") // true` |
| `normalizeURL(url)` | Ensures a URL starts with `http://` or `https://` | `normalizeURL("example.com") // "https://example.com"` |
| `obfuscateEmail(email)` | Obfuscates an email address for privacy | `obfuscateEmail("user@example.com") // "****@example.com"` |
| `getRandomHexColor()` | Generates a random hex color | `getRandomHexColor() // "#a1b2c3"` |
| `getMetaTagContent(html, metaName)` | Extracts meta tag content from HTML | `getMetaTagContent("<meta name='description' content='Hello'>", "description") // "Hello"` |
| `rgbToHex(r, g, b)` | Converts an RGB color to hex | `rgbToHex(255, 0, 0) // "#ff0000"` |
| `hexToRgb(hex)` | Converts a hex color to RGB format | `hexToRgb("#ff0000") // "rgb(255, 0, 0)"` |
| `isJSON(str)` | Checks if a string is valid JSON | `isJSON('{"name":"John"}') // true` |
| `addOrdinalSuffix(num)` | Adds an ordinal suffix to a number (e.g., 1st, 2nd) | `addOrdinalSuffix(3) // "3rd"` |
| `markdownToHTML(markdown)` | Converts basic markdown to HTML | `markdownToHTML("**Bold** and *Italic*") // "<b>Bold</b> and <i>Italic</i>"` |

## 🔗 Contributing
Feel free to submit issues and pull requests to enhance this package!

## 📜 License
MIT License. Free to use and modify.

