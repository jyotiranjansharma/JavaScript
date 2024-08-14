# JavaScript
Learn and practice continously
 
# HOW DOES A WEB BROWSER WORK ?

Web browsers are complex software applications that allow users to access and interact with content on the World Wide Web. 
They work by interpreting and displaying web pages and applications written in HTML, CSS, JavaScript, and other web technologies. 
Here's a high-level overview of how a web browser works:

1. User Interface
The user interface (UI) of a web browser includes the address bar, back and forward buttons, bookmarks, and the display window where web pages are rendered. 
It also includes additional features like extensions, developer tools, and settings.

2. Address Bar and URL Processing
When a user enters a URL (Uniform Resource Locator) into the address bar, the browser begins by parsing the URL to determine the protocol (e.g., HTTP, HTTPS), the domain name, and the path.

3. DNS Resolution
The browser contacts a DNS (Domain Name System) server to resolve the domain name into an IP address, which it uses to locate the web server hosting the requested content.

4. Sending an HTTP Request
Once the IP address is obtained, the browser establishes a connection to the web server using TCP/IP. 
If the URL specifies HTTPS, an additional SSL/TLS handshake occurs to establish a secure connection. 
The browser then sends an HTTP request to the server, specifying the type of request (GET, POST, etc.), the requested resource, and any headers needed (like cookies, user-agent information, etc.).

5. Receiving an HTTP Response
The web server processes the request and sends back an HTTP response, which includes the status code (e.g., 200 OK, 404 Not Found), headers (e.g., content-type, content-length), 
and the body of the response, which typically contains the HTML content of the page.

6. Rendering Engine
The browser's rendering engine processes the HTML and builds the DOM (Document Object Model) tree. It also processes CSS to create the CSSOM (CSS Object Model) tree. 
The rendering engine combines these to create a render tree.

HTML Parsing: Converts HTML into the DOM tree.
CSS Parsing: Converts CSS into the CSSOM tree.

7. Layout and Painting
Layout: The render tree undergoes layout processing, where the dimensions and positions of elements are calculated. This stage is also called reflow.
Painting: The render tree is traversed, and the visual representation of each node is painted onto the screen.

8. JavaScript Engine
If the HTML document contains JavaScript, the browser's JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox) parses and executes the scripts. 
JavaScript can modify the DOM and CSSOM, leading to reflows and repaints.

9. Event Handling
Browsers handle user interactions such as clicks, scrolls, and other events. Event listeners in JavaScript can modify the DOM in response to these events.

10. Networking
The browser handles further network requests for additional resources such as images, CSS files, JavaScript files, and AJAX requests. 
These requests are made asynchronously to avoid blocking the rendering process.

11. Compositing
Modern browsers use compositing layers to efficiently manage complex layouts and animations. The compositing process involves combining layers into a final image that is displayed to the user.

12. Display
Finally, the fully rendered web page is displayed in the browser window, ready for user interaction.

# Key points to consider while understanding javascript
Here are the key points:

- **High-Level Code to Machine Code:**
  - Understand the process of translating high-level JavaScript code into machine code and its execution as a stack frame on the call stack.

- **Memory and Primitive Types:**
  - Understand how different primitive types are stored in memory, including addresses, space allocation, and binary representation.
  - Recognize the concept of mantissa in floating-point representations.

- **Value Types vs. Reference Types:**
  - Differentiate between value types and reference types.
  - Understand the implications of assigning values vs. assigning pointers.

- **Typing Systems:**
  - Understand implicit typing, explicit typing, nominal typing, structural typing, and duck typing.

- **Comparison and Type Checking:**
  - Distinguish between `==`, `===`, and `typeof` in JavaScript.

- **Scopes:**
  - Understand function scope, block scope, and lexical scope.

- **Expressions and Statements:**
  - Differentiate between an expression and a statement.
  - Understand the concept of evaluating an expression.

- **Memory and Call Stack:**
  - Understand what happens in memory/on the call stack when evaluating expressions, passing arguments, returning results, and assigning or retrieving values.

- **IIFE’s, Modules, and Namespaces:**
  - Understand Immediately Invoked Function Expressions (IIFE's), modules, and namespaces.
  - Recognize why ES6 modules and block scope don't fully replace IIFE's.

- **Event Loop and Message Queue:**
  - Understand how the message queue and event loop work in JavaScript, including timing, async behavior, 
  and handling browser APIs like `setTimeout`, `setInterval`, and `requestAnimationFrame`.

- **Performance and Optimization:**
  - Identify more expensive operations in terms of processing time or memory.
  - Use tools like `jsperf` and `performance.now` for performance testing.
  - Understand Big O notation and its relevance.

- **JavaScript Engines:**
  - Understand optimizations (opts) and deoptimizations (deopts) across different JavaScript engines.

- **Number Representations:**
  - Represent numbers in binary, hex, decimal, and scientific notation in JavaScript and other languages.

- **Binary Data Manipulation:**
  - Understand bitwise operators, typed arrays, and array buffers.
  - Use RGBA as a context for manipulating binary data.

- **Object-Oriented Concepts:**
  - Understand `new`, constructors, `instanceof`, and instances.
  - Recognize prototypical inheritance, the prototype chain, and the limitations of classical inheritance in JavaScript.
  - Differentiate between `Object.create` and `Object.assign`.

- **Design Patterns and Inheritance:**
  - Understand the factory and class design patterns.
  - Differentiate between member properties and properties on the prototype.
  - Recognize the "is a" vs. "has a" relationships in inheritance and polymorphism.

- **Functional Programming Concepts:**
  - Understand pure functions, side effects, and state mutation.
  - Use `map`, `reduce`, and `filter` to replace for/while loops.
  - Understand lambdas, closures, higher-order functions, and their usage.

- **Abstract Data Structures:**
  - Understand abstract data structures, their implementation in JavaScript, and typical use cases.
  - Recognize the use of recursion in building abstract data structures.

- **Algorithm Familiarity:**
  - Be familiar with common algorithms and how to find the right one for specific problems.

- **Design Patterns:**
  - Become familiar with common design patterns and their applications in JavaScript.

- **Functional Techniques:**
  - Understand partial functions, currying, compose, and pipe.
  - Recognize the utility of unary functions.

- **Reflection in JavaScript:**
  - Understand how reflection works differently in JavaScript compared to strongly typed, compiled languages.
