# Task Manager Application 📝

A functional Task Manager built with **React** that demonstrates advanced state management using the **Context API** and the **`useReducer`** hook. This application moves beyond simple local state, providing a centralized store for managing tasks across multiple components.

This project addresses the assignment requirements for "Global State Management in React."

## 🚀 Features

-   **Global State Management**: Powered by `React.createContext` and `useReducer` to handle state logic outside of UI components.
-   **CRUD Operations**:
    -   **Create**: Add new tasks via the input field.
    -   **Read**: View a dynamic list of tasks with a summary count.
    -   **Update**: Edit existing task text inline and toggle completion status.
    -   **Delete**: Remove individual tasks or clear all completed tasks.
-   **Data Persistence**: Tasks are automatically saved to and loaded from the browser's `localStorage`.
-   **Task Summary**: Real-time tracking of completed vs. total tasks.
-   **Responsive Design**: A clean, mobile-friendly UI styled with modern CSS.

## 📂 Project Structure

```text
src/
├── components/
│   ├── TaskInput.js        # Form to dispatch ADD_TASK actions
│   ├── TaskList.js         # Consumes Context to render the list
│   ├── TaskItem.js         # Handles individual EDIT, DELETE, TOGGLE actions
│   └── TaskSummary.js      # Displays stats and CLEAR_TASKS action
├── context/
│   └── TaskContext.js      # Contains Context, Provider, and Reducer logic
├── App.js                  # Main Layout & Provider Wrapper
├── App.css                 # Styling & Animations
└── index.js                # Entry point

```

## 🛠️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/coderooz/-react-essentials-assignment.git
cd react-essentials-assignment/task-manager

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the application:**
```bash
npm start

```


4. Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the app in your browser.

## 🧠 How It Works (Context & Reducer)

This app avoids "prop drilling" by wrapping the application in a `TaskProvider`.

1. **The Store**: `initialState` loads data from LocalStorage or defaults to an empty array.
2. **The Reducer**: The `taskReducer` function handles state transitions based on action types:
* `ADD_TASK`
* `DELETE_TASK`
* `TOGGLE_TASK`
* `EDIT_TASK`
* `CLEAR_TASKS`


3. **The Consumption**: Components use the custom hook `useTaskContext()` to access the `tasks` state and the `dispatch` function directly.

## 📋 Assignment Checklist

* [x] **Context API Setup**: Created `TaskContext` to share state globally.
* [x] **Reducer Logic**: Implemented complex state logic (switch-case) in a reducer function.
* [x] **Component Separation**: Input, List, Item, and Summary are distinct components.
* [x] **Feature: Edit**: Users can edit task text after creation.
* [x] **Feature: Persistence**: Data survives page reloads (LocalStorage).
* [x] **Styling**: Applied hover effects and "greyed-out" styling for completed tasks.

## 📸 Screenshots

![Default Image](./images/Task%20Manager%201.png)
![Add Tasks](./images/Task%20Manager%202%20-%20Add%20Tasks.png)
![Edit Tasks](./images/Task%20Manager%203%20-%20Edit.png)

## ☁️ Deployment

This project is ready for deployment on Vercel or Netlify.

- **Live Demo:** [https://task-manager-roan-three.vercel.app/](https://task-manager-roan-three.vercel.app/)

---

- **Author:** Ranit Saha (**[Coderooz](https://www.coderooz.in)**)

- **Tech Stack:** React 18, CSS3, LocalStorage API
---