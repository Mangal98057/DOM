# 🚀 JavaScript DOM Mastery Guide

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-DOM-yellow?style=for-the-badge\&logo=javascript)
![Level](https://img.shields.io/badge/Level-Beginner%20to%20Advanced-blue?style=for-the-badge)
![Projects](https://img.shields.io/badge/Projects-Hands%20On-success?style=for-the-badge)

### Learn the JavaScript DOM step-by-step with practical examples and mini projects.

</div>

---

# 📚 Table of Contents

* [What is DOM?](#-what-is-dom)
* [DOM Tree Structure](#-dom-tree-structure)
* [Selecting Elements](#-selecting-elements)
* [Changing Content](#-changing-content)
* [Styling Elements](#-styling-elements)
* [Attributes](#-attributes)
* [Creating Elements](#-creating-elements)
* [Removing Elements](#-removing-elements)
* [Event Handling](#-event-handling)
* [DOM Traversing](#-dom-traversing)
* [Class Manipulation](#-class-manipulation)
* [Event Bubbling & Delegation](#-event-bubbling--delegation)
* [Local Storage](#-local-storage)
* [Mini Projects](#-mini-projects)
* [Interview Questions](#-interview-questions)
* [Best Practices](#-best-practices)

---

# 📖 What is DOM?

DOM stands for **Document Object Model**.

When a webpage loads, the browser converts HTML into a tree-like structure that JavaScript can access and manipulate.

Using the DOM, JavaScript can:

✅ Change HTML content
✅ Modify CSS styles
✅ Handle button clicks
✅ Create dynamic UI
✅ Build interactive applications

---

# 🌳 DOM Tree Structure

## HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Tutorial</title>
</head>
<body>
  <h1>Hello DOM</h1>
  <p>Learning JavaScript</p>
</body>
</html>
```

## DOM Representation

```text
Document
 └── html
      ├── head
      │    └── title
      └── body
           ├── h1
           └── p
```

---

# 🎯 Selecting Elements

## 1. getElementById()

```html
<h1 id="title">Hello</h1>
```

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

---

## 2. getElementsByClassName()

```html
<p class="text">One</p>
<p class="text">Two</p>
```

```javascript
const items = document.getElementsByClassName("text");
```

---

## 3. querySelector()

Selects the first matching element.

```javascript
const element = document.querySelector(".text");
```

---

## 4. querySelectorAll()

```javascript
const elements = document.querySelectorAll(".text");
```

---

# ✍️ Changing Content

## innerHTML

```javascript
element.innerHTML = "<h1>Welcome</h1>";
```

---

## innerText

```javascript
element.innerText = "Hello User";
```

---

## textContent

```javascript
element.textContent = "Simple Text";
```

---

# 🎨 Styling Elements

```javascript
const box = document.querySelector(".box");

box.style.backgroundColor = "black";
box.style.color = "white";
box.style.padding = "20px";
```

---

# ⚙️ Attributes

## getAttribute()

```javascript
link.getAttribute("href");
```

---

## setAttribute()

```javascript
link.setAttribute("href", "https://google.com");
```

---

## removeAttribute()

```javascript
link.removeAttribute("target");
```

---

# 🏗️ Creating Elements

```javascript
const heading = document.createElement("h1");

heading.innerText = "New Heading";

document.body.appendChild(heading);
```

---

# ❌ Removing Elements

```javascript
element.remove();
```

---

# 🖱️ Event Handling

## addEventListener()

```javascript
button.addEventListener("click", () => {
  console.log("Button Clicked");
});
```

---

# 🔥 Common Events

| Event     | Description    |
| --------- | -------------- |
| click     | Mouse click    |
| submit    | Form submit    |
| keydown   | Keyboard press |
| mouseover | Mouse hover    |
| change    | Input changed  |

---

# 📋 Form Handling

## HTML

```html
<input type="text" id="name">
<button id="btn">Submit</button>
```

## JavaScript

```javascript
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const value = document.getElementById("name").value;

  console.log(value);
});
```

---

# 🌐 DOM Traversing

## parentElement

```javascript
element.parentElement;
```

## children

```javascript
element.children;
```

## firstElementChild

```javascript
element.firstElementChild;
```

## lastElementChild

```javascript
element.lastElementChild;
```

## nextElementSibling

```javascript
element.nextElementSibling;
```

## previousElementSibling

```javascript
element.previousElementSibling;
```

---

# 🧩 Class Manipulation

## Add Class

```javascript
element.classList.add("active");
```

## Remove Class

```javascript
element.classList.remove("active");
```

## Toggle Class

```javascript
element.classList.toggle("dark");
```

---

# 🧠 Event Bubbling

```javascript
child.addEventListener("click", () => {
  console.log("Child");
});

parent.addEventListener("click", () => {
  console.log("Parent");
});
```

## Output

```text
Child
Parent
```

---

# 🚀 Event Delegation

```javascript
document.querySelector("ul").addEventListener("click", (e) => {

  if (e.target.tagName === "LI") {
    console.log(e.target.innerText);
  }

});
```

---

# 💾 Local Storage

## Save Data

```javascript
localStorage.setItem("name", "Mangal");
```

## Get Data

```javascript
localStorage.getItem("name");
```

## Remove Data

```javascript
localStorage.removeItem("name");
```

---

# 🛠️ Mini Projects

## Beginner Projects

* Counter App
* To-Do List
* Calculator
* Digital Clock
* Color Changer

---

## Intermediate Projects

* Weather App
* Quiz App
* Notes App
* Image Slider
* Form Validation

---

## Advanced Projects

* Kanban Board
* Drag & Drop App
* Chat Application
* Infinite Scroll
* Real-time Dashboard

---

# 🎤 Interview Questions

## Beginner Level

1. What is DOM?
2. Difference between HTML and DOM?
3. Difference between innerHTML and innerText?
4. What is querySelector()?
5. What is event bubbling?

---

## Intermediate Level

1. Difference between localStorage and sessionStorage?
2. What is event delegation?
3. Difference between append() and appendChild()?
4. What is preventDefault()?
5. What is stopPropagation()?

---

## Advanced Level

1. Explain JavaScript Event Loop.
2. What is debouncing?
3. What is throttling?
4. Difference between synchronous and asynchronous JavaScript?
5. Explain Virtual DOM in React.

---

# 💡 Best Practices

✅ Use `addEventListener()` instead of inline events
✅ Keep code modular and reusable
✅ Avoid excessive use of `innerHTML`
✅ Use event delegation for dynamic elements
✅ Practice by building projects

---

# 🏁 Conclusion

The DOM is one of the most important concepts in JavaScript.

By mastering DOM manipulation, you can build:

* Interactive websites
* Dynamic user interfaces
* Real-world frontend projects
* Modern JavaScript applications

---

# ⭐ Support

If you found this repository helpful:

⭐ Star the repository
🍴 Fork the project
📢 Share with others

---

# 👨‍💻 Author

Made with ❤️ by **Mangal Singh**
