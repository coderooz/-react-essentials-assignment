
# 💸 Personal Expense Tracker

A robust React application designed to track personal finances, demonstrating the power of **Custom React Hooks** for state management and **LocalStorage** for data persistence.

This project separates UI components from business logic, ensuring a clean, scalable, and maintainable codebase.

## 🚀 Features

- **Expense Management:** Add new expenses with title, amount, date, and category.
- **Data Persistence:** Uses a custom `useLocalStorage` hook to save data automatically; data survives page reloads.
- **Advanced Filtering:** Filter expenses by specific categories (Food, Transport, etc.) or date.
- **Dynamic Summary:** Real-time calculation of total spending based on active filters.
- **Custom Hooks Architecture:** Logic is abstracted away from UI components.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.

## 🛠️ Architecture: Custom Hooks

This project is built around three primary custom hooks to demonstrate advanced React patterns:

### 1. `useLocalStorage(key, initialValue)`
* **Purpose:** Abstraction of the `window.localStorage` API.
* **Functionality:** Automatically syncs state changes to the browser's local storage and retrieves them on initialization.

### 2. `useForm(initialValues)`
* **Purpose:** Generic form handling.
* **Functionality:** Manages input state changes and form resetting, making form components cleaner and reusable.

### 3. `useExpenseManager()`
* **Purpose:** The central "brain" of the application.
* **Functionality:**
    * Integrates `useLocalStorage` to manage the expense list.
    * Handles "Business Logic": Adding, Deleting, and Filtering expenses.
    * Uses `useMemo` to optimize filtering and total calculations.

## 📂 Project Structure

The project follows a modular structure, separating Hooks, Components, and Utilities.

```text
src/
├── images/              # Images/Screenshot
├── components/          # UI Components (Presentational)
│   ├── ExpenseFilter.js # Dropdown and Date inputs for filtering
│   ├── ExpenseForm.js   # Form to add new expenses
│   ├── ExpenseList.js   # Renders the list of expense items
│   └── ExpenseSummary.js# Displays total spending
│
├── hooks/               # Custom Hooks (Logic & State)
│   ├── useExpenseManager.js
│   ├── useForm.js
│   └── useLocalStorage.js
│
├── App.js               # Main Entry Point (Integration Layer)
├── App.css              # Global Styling
└── index.js             # React DOM rendering

```

## 💻 Tech Stack

* **React (v18+):** Functional Components & Hooks.
* **CSS3:** Custom properties (variables) and Flexbox/Grid for layout.
* **LocalStorage API:** For client-side data persistence.

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
```bash
git clone https://github.com/coderooz/-react-essentials-assignment
```


2. **Navigate to the project directory:**
```bash
cd -react-essentials-assignment/react-expense-tracker
```


3. **Install dependencies:**
```bash
npm install
```


4. **Start the development server:**
```bash
npm start
```


The app will open in your browser at `http://localhost:3000`.

## 📸 Screenshots

![Main Image](/images/image.png)

---

## 🔗 Live Demo

- **Deployment Link**: []()

---

- **Author** : Ranit Saha (**[Coderooz](https://www.coderooz.in)**)