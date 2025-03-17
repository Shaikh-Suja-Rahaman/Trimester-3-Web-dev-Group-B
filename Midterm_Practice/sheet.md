

### 🚀 **1. Todo List**
#### **Problem Statement**  
Create a simple todo list where users can add and remove tasks.

#### **Requirements**  
- Use `useState` to manage tasks.
- Add a new task on button click.
- Remove a task when clicked.

#### **Hints**  
- Maintain an array of tasks using `useState`.
- Use the spread operator to add new tasks.

#### **Solution Approach**  
- Initialize state with an empty array.
- Use an input field to take task input.
- Render the task list using `.map()`.

#### **Example**  
_Input_: "Buy groceries"  
_Output_: Renders a task list with "Buy groceries"  

#### **Starter Code**  
```jsx
function TodoList() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <input type="text" placeholder="Enter task" />
      <button>Add Task</button>
      <ul>{/* Render tasks here */}</ul>
    </div>
  );
}
```

---

### 🚀 **2. Counter with Auto Reset**
#### **Problem Statement**  
Create a counter that resets to zero every 5 seconds.

#### **Requirements**  
- Use `useState` to store count.
- Use `useEffect` to reset after 5 seconds.
- Use a button to manually increment the count.

#### **Hints**  
- Use `setTimeout` inside `useEffect`.
- Clear the timeout when component re-renders.

#### **Solution Approach**  
- Use `useEffect` to track time.
- Reset count when 5 seconds pass.

#### **Example**  
_Initial_: 0  
_User increments_: 1, 2, 3...  
_After 5 sec_: Resets to 0  

#### **Starter Code**  
```jsx
function AutoResetCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button>Increment</button>
    </div>
  );
}
```

---

### 🚀 **3. Toggle Theme**
#### **Problem Statement**  
Build a dark/light mode toggle.

#### **Requirements**  
- Use `useState` for theme state.
- Toggle between "light" and "dark" on button click.

#### **Hints**  
- Store theme as "light" or "dark".
- Use `className` to change styles.

#### **Solution Approach**  
- Maintain `theme` in state.
- Toggle value between "light" and "dark".

#### **Example**  
_Initial_: Light mode  
_After click_: Dark mode  

#### **Starter Code**  
```jsx
function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <button>Toggle Theme</button>
    </div>
  );
}
```

---

### 🚀 **4. Dynamic List Renderer**
#### **Problem Statement**  
Create a list that dynamically updates when an item is added.

#### **Requirements**  
- Use `useState` to manage items.
- Render list using `.map()`.
- Allow item addition via input.

#### **Hints**  
- Use the spread operator when adding items.

#### **Solution Approach**  
- Maintain an array in state.
- Use `.map()` to render items.

#### **Example**  
_Input_: "Item 1"  
_Output_: `["Item 1"]`  

#### **Starter Code**  
```jsx
function DynamicList() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <input type="text" placeholder="Enter item" />
      <button>Add Item</button>
      <ul>{/* Render items here */}</ul>
    </div>
  );
}
```

---

### 🚀 **5. Show/Hide Text**
#### **Problem Statement**  
Create a button that toggles text visibility.

#### **Requirements**  
- Use `useState` for visibility.
- Display or hide text on button click.

#### **Hints**  
- Store visibility state as `true/false`.

#### **Solution Approach**  
- Use `useState` to track visibility.
- Toggle visibility on button click.

#### **Example**  
_Initial_: "Hello, world!"  
_Click_: Text disappears  

#### **Starter Code**  
```jsx
function ToggleText() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button>Toggle</button>
      <p>{/* Show text if visible */}</p>
    </div>
  );
}
```

---


---

### 🚀 **6. Stopwatch (Start/Stop/Reset Timer)**  
#### **Problem Statement**  
Build a stopwatch that starts, stops, and resets.

#### **Requirements**  
- Use `useState` for tracking time.
- Use `useEffect` for updating time every second.
- Provide "Start", "Stop", and "Reset" buttons.

#### **Hints**  
- Use `setInterval` inside `useEffect`.
- Clear the interval when stopping.

#### **Solution Approach**  
- Start timer on "Start".
- Stop timer on "Stop".
- Reset timer on "Reset".

#### **Example**  
_Click Start_: 1, 2, 3...  
_Click Stop_: Pauses  
_Click Reset_: Resets to 0  

#### **Starter Code**  
```jsx
function Stopwatch() {
  const [time, setTime] = useState(0);

  return (
    <div>
      <p>Time: {time}s</p>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
}
```

---

### 🚀 **7. Random Color Generator**
#### **Problem Statement**  
Create a button that changes the background to a random color.

#### **Requirements**  
- Use `useState` for color.
- Change color on button click.

#### **Hints**  
- Generate a random hex color.

#### **Solution Approach**  
- Generate color using `Math.random()`.
- Set new color using `useState`.

#### **Example**  
_Initial_: White  
_After click_: Background changes to a random color  

#### **Starter Code**  
```jsx
function RandomColor() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div style={{ backgroundColor: color }}>
      <button>Change Color</button>
    </div>
  );
}
```

---

### 🚀 **8. Simple Form Submission (Show submitted data)**
#### **Problem Statement**  
Create a form that displays submitted data.

#### **Requirements**  
- Use `useState` for form values.
- Show submitted data below the form.

#### **Hints**  
- Store input in `useState`.
- Update state on form submit.

#### **Solution Approach**  
- Store input data.
- Display on submit.

#### **Example**  
_Input_: Name = "John"  
_Click Submit_: Displays "John"  

#### **Starter Code**  
```jsx
function SimpleForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input type="text" placeholder="Enter name" />
      <button>Submit</button>
      <p>Submitted: {/* Show name here */}</p>
    </div>
  );
}
```

---

### 🚀 **9. Accordion (Expand/Collapse Sections)**
#### **Problem Statement**  
Create an accordion with expandable sections.

#### **Requirements**  
- Use `useState` to track open section.
- Toggle section on click.

#### **Hints**  
- Use a boolean to track visibility.

#### **Solution Approach**  
- Toggle visibility of section.

#### **Example**  
_Click_: Expands content  
_Click again_: Collapses content  

#### **Starter Code**  
```jsx
function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button>Toggle</button>
      {open && <p>Accordion content here</p>}
    </div>
  );
}
```

---

### 🚀 **10. Filter List (Search in a list dynamically)**
#### **Problem Statement**  
Create a search filter for a list.

#### **Requirements**  
- Use `useState` for search input.
- Filter list based on input.

#### **Hints**  
- Use `.filter()` to filter items.

#### **Solution Approach**  
- Match search query with list items.

#### **Example**  
_Input_: "Ap"  
_Output_: Shows "Apple"  

#### **Starter Code**  
```jsx
function SearchFilter() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input type="text" placeholder="Search" />
      <ul>{/* Render filtered list */}</ul>
    </div>
  );
}
```

---

### 🚀 **11. Character Counter (Counts input length)**
#### **Problem Statement**  
Show character count as the user types.

#### **Requirements**  
- Use `useState` for input.
- Display character count.

#### **Hints**  
- Store input text and count its length.

#### **Solution Approach**  
- Update count on input change.

#### **Example**  
_Input_: "Hello"  
_Output_: "5 characters"  

#### **Starter Code**  
```jsx
function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" placeholder="Type something" />
      <p>Character count: {/* Show count */}</p>
    </div>
  );
}
```

---

### 🚀 **12. Like/Dislike Button (Toggle like state)**
#### **Problem Statement**  
Create a like/dislike button.

#### **Requirements**  
- Use `useState` for like status.
- Toggle like/dislike.

#### **Hints**  
- Store boolean state for like status.

#### **Solution Approach**  
- Change state between true and false.

#### **Example**  
_Click_: "Liked"  
_Click again_: "Not Liked"  

#### **Starter Code**  
```jsx
function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <button>{liked ? "Unlike" : "Like"}</button>
    </div>
  );
}
```

---

### 🚀 **13. Dropdown Selector (Display selected option)**
#### **Problem Statement**  
Show selected dropdown option.

#### **Requirements**  
- Use `useState` to track selected option.

#### **Hints**  
- Store selected option in state.

#### **Solution Approach**  
- Update state on selection.

#### **Example**  
_Select "Apple"_: Displays "Selected: Apple"  

#### **Starter Code**  
```jsx
function DropdownSelector() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <select>{/* Options here */}</select>
      <p>Selected: {/* Show selected option */}</p>
    </div>
  );
}
```

---

### 🚀 **14. Product List with Prices (Calculate total)**
#### **Problem Statement**  
Display products with prices and total amount.

#### **Requirements**  
- Use `useState` for product list.
- Show total price.

#### **Hints**  
- Use `.reduce()` to sum prices.

#### **Solution Approach**  
- Sum product prices.

#### **Example**  
_Product 1: ₹10, Product 2: ₹20_  
_Output_: "Total: ₹30"  

#### **Starter Code**  
```jsx
function ProductList() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <ul>{/* Render products */}</ul>
      <p>Total: {/* Show total */}</p>
    </div>
  );
}
```

---

### 🚀 **15. Auto-Refreshing Date & Time Display**
#### **Problem Statement**  
Show real-time date and time.

#### **Requirements**  
- Use `useState` for time.
- Use `useEffect` to update every second.

#### **Hints**  
- Use `setInterval` inside `useEffect`.

#### **Solution Approach**  
- Update time every second.

#### **Example**  
_Initial_: `12:00:01 PM`  
_After 1 sec_: `12:00:02 PM`  

#### **Starter Code**  
```jsx
function Clock() {
  const [time, setTime] = useState(new Date());

  return (
    <div>
      <p>Time: {/* Show current time */}</p>
    </div>
  );
}
```

---
