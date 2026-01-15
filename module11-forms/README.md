# 📝 Form Handling & Validation: User Registration & Mario's Pizza

This project explores advanced form handling in React, focusing on **controlled components**, **real-time validation**, **dynamic state updates**, and **business logic implementation**.

It consists of two distinct applications accessible via a tabbed interface:
1.  **User Registration System:** A strict form with real-time error feedback and regex validation.
2.  **Mario's Pizza Order System:** A dynamic ordering form with array manipulation and real-time price calculation.

## 🔗 Live Demo

- **Deployment Link** : []()

## 🚀 Features

### 1. User Registration Form
* **Real-time Validation:** Checks inputs instantly as the user types.
* **Regex Patterns:** Validates Email format and Phone numbers (10 digits).
* **Password Logic:** Enforces minimum length and ensures "Confirm Password" matches.
* **Conditional Submission:** The submit button remains disabled until the entire form is valid.
* **Visual Feedback:** Displays specific error messages immediately below invalid fields.

### 2. Mario's Pizza Ordering System
* **Dynamic Pricing:** Automatically updates the total price based on size, crust, toppings, and sides.
* **Complex State Management:** Manages arrays for checkboxes (Toppings/Sides) to allow multiple selections.
* **Order Summary:** A live panel that reflects changes instantly before submission.
* **Business Logic:** Different prices for different sizes and crust types.

## 📂 Project Structure

The project is organized into a dedicated module folder to keep it separate from other assignments.

```text
src/
└── module11-forms/
    ├── RegistrationForm.js   # Logic for user validation
    ├── PizzaOrderForm.js     # Logic for dynamic pricing & arrays
    ├── FormsContainer.js     # Switcher component (Tabs)
    └── FormStyles.css        # Shared styling for both forms

```

## 🛠️ Tech Stack

* **React (v18):** `useState` for form data, `useEffect` for running validation logic.
* **CSS3:** Flexbox and Grid for responsive layouts.
* **JavaScript (ES6):** Regex, Array filtering, and Object mapping.

## 💻 How to Run

1. **Clone the repository:**
```bash
git clone https://github.com/coderooz/-react-essentials-assignment.git
```


2. **Navigate to the project directory:**
```bash
cd -react-essentials-assignment
```


3. **Install dependencies:**
```bash
npm install
```


4. **Start the application:**
```bash
npm start
```


The app will open in your browser at `http://localhost:3000`.

## 📸 Screenshots

![Registration Form Image](/images/image.png)
![Successfull Registration Image](/images/image2.png)
![Pizza Order Image](/images/image3.png)

---

- **Author** : Ranit Saha (**[Coderooz](https://www.coderooz.in)**)
- **Contact** : _[Contact Me](https://www.coderooz.in/contact?subject=About%20project%20personal-expense-tracker&message=This%20is%20about%20the%20project%20%22Form%20Handling%20%26%20Validation%3A%20User%20Registration%20and%20Mario%27s%20Pizza%22%20under%20the%20repository%20%22-react-essentials-assignement%22)_
