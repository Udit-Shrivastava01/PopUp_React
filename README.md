# PopUp React

A simple and responsive popup confirmation UI built with **React.js and Tailwind CSS**. This project demonstrates React state management, props, event handling, conditional rendering, and responsive styling.

## 🚀 Features

- **Conditional Rendering:** Displays the popup only when the `pop` state is `true`.
- **Reusable Popup Component:** Uses a separate `Pop` component for the confirmation dialog.
- **Dynamic Props:** Passes the selected action (`Delete` or `Update`) to the popup.
- **State Management:** Uses React's `useState` hook to control popup visibility and its message.
- **Close Button:** Closes the popup when the user clicks the cross button.
- **Responsive UI:** Uses Tailwind CSS utility classes to adapt the popup to different screen sizes.

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite

## 📸 Project Overview

The application displays two buttons:

- **Delete:** Opens a confirmation popup asking whether the user wants to delete.
- **Update:** Opens the same popup with an update confirmation message.

The popup is rendered dynamically based on the selected action.

## 🧠 Key React Concepts

### 1. Conditional Rendering

Conditional rendering means displaying a component or element only when a particular condition is satisfied.

In this project:

```jsx
{pop && <Pop func={setPop} action={action} />}
```

Here, `pop` is a Boolean state variable.

- When `pop` is `true`, React renders the `Pop` component.
- When `pop` is `false`, React does not render the popup.

The `&&` operator is a common React pattern for conditionally rendering JSX.

### 2. State Management with `useState`

```jsx
const [pop, setPop] = useState(false);
const [action, setAction] = useState('');
```

- `pop` controls whether the popup is visible.
- `action` stores the selected operation, such as `"Delete"` or `"Update"`.
- `setPop()` and `setAction()` update their respective state values.

### 3. Passing Props to a Component

```jsx
<Pop func={setPop} action={action} />
```

Props allow the parent component (`App`) to pass information and functions to the child component (`Pop`).

- `func` passes the state setter so the popup can close itself.
- `action` passes the selected operation so the popup can display the correct message.

The child component receives these props using destructuring:

```jsx
function Pop({ func, action }) {
  return (
    <p>Are you sure to {action}?</p>
  );
}
```

For example, if `action` is `"Delete"`, the message becomes **"Are you sure to Delete?"**

### 4. Event Handling

The buttons use `onClick` event handlers to update the state.

```jsx
<button
  onClick={() => {
    setAction("Delete");
    setPop(true);
  }}
>
  Delete
</button>
```

When the button is clicked, the selected action is stored and the popup becomes visible.

To close the popup, the child component calls:

```jsx
<button onClick={() => func(false)}>
  ❌
</button>
```

This updates the parent's `pop` state to `false`, causing React to stop rendering the popup.

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm installed on your system.
- Basic knowledge of React and JavaScript.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Udit-Shrivastava01/PopUp_React.git
   ```

2. Navigate to the project folder:

   ```bash
   cd PopUp_React
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 📂 Component Structure

```text
PopUp_React/
├── src/
│   ├── components/
│   │   └── Pop.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

*Note: The structure above illustrates a typical Vite project layout; your actual file structure may differ.*

## 🎯 Learning Outcomes

Through this project, I practiced:

- Implementing conditional rendering in React.
- Managing component visibility using `useState`.
- Passing data and callback functions through props.
- Handling click events and updating state.
- Creating reusable components.
- Building responsive interfaces with Tailwind CSS.

## 🔗 Repository

[View PopUp_React on GitHub](https://github.com/Udit-Shrivastava01/PopUp_React)

---

**Built as a React learning project to practice component-based UI development and conditional rendering.**
