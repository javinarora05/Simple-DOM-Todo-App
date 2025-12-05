# Simple-DOM-Todo-App

A minimal vanilla JavaScript Todo app that stores tasks in `localStorage` so they persist across page reloads. Add tasks, see them rendered instantly in the list, and remove them with a single click. 

---

## Features

- Add new todo items via an input field and button.
- Prevents empty todos and duplicate entries.
- Persists all todos using `localStorage`.
- Renders todos dynamically in the DOM.
- Delete button on each todo to remove it from both the UI and `localStorage`. :contentReference[oaicite:1]{index=1}

---

## Getting Started

1. **Clone or download** this repository.
2. Make sure the following files are in the same folder:
   - `index.html`
   - `script.js`
   - `styles.css`
3. Open `index.html` directly in your browser (double-click it or use “Open with Live Server” in VS Code). 

---

## Usage

1. Type a task into the input field.
2. Click **“Add TODO”** to add it to the list.
3. Your todos are automatically saved in the browser’s `localStorage`.
4. Click the **“Delete Button”** next to any todo to remove it. :contentReference[oaicite:3]{index=3}

---

## Project Structure

```text
.
├── index.html   # Markup for the Todo app UI
├── script.js    # DOM logic & localStorage handling
└── styles.css   # Styling for layout & components
