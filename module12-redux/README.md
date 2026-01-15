# 🍕 Redux Pizza App: Full-Scale User Signup & Ordering System

This project is a comprehensive application built with **React** and **Redux Toolkit**. It demonstrates advanced state management by handling user authentication flow, complex form validation, and a dynamic shopping cart system entirely through Redux slices.

## 🔗 Live Deployment
*Add your Netlify/Vercel link here*

## 🚀 Key Features

### 1. User Signup Flow (Redux Powered)
* **Centralized Form State:** All input fields are managed via `userSlice`.
* **Redux Validation:** Validation logic dispatches error actions to the global store.
* **Submission Handling:** Manages success/error states to conditionally render UI.

### 2. Pizza Customization & Ordering
* **Dynamic Price Calculation:** The `pizzaSlice` automatically recalculates totals based on selected size, crust, and toppings.
* **Complex State Arrays:** Toggling ingredients (adding/removing toppings) is handled efficiently in Redux reducers.
* **Interactive UI:** Visual feedback for selected options.

### 3. Shopping Cart System
* **Global Cart Management:** The `cartSlice` persists items across different views (Menu to Cart).
* **Financial Logic:** Handles grand total calculations and item removal.

## 📂 Project Structure

The project utilizes a feature-based architecture standard in Redux applications.

```text
src/module12-redux/
├── app/
│   └── store.js             # Global Store Configuration
├── features/
│   ├── userSlice.js         # User State & Validation
│   ├── pizzaSlice.js        # Pizza Logic (Price/Options)
│   └── cartSlice.js         # Cart Management
├── components/
│   ├── SignupForm.js        # UI for User Entry
│   ├── PizzaMenu.js         # UI for Ordering
│   └── Cart.js              # UI for Checkout
└── ReduxApp.js              # Main Root with Provider

```

## Technologies Used

- **React:** UI Component Library
- **Redux Toolkit:** State Management (Store, Slices, Reducers)
- **React-Redux:** Connecting Components to Store (useSelector, useDispatch)
- **CSS:** Responsive Styling


## 💻 How to Run

1. **Clone the repository:**
```bash
git clone https://github.com/coderooz/-react-essentials-assignment.git
```

2. **Navigate to the project directory:**
```bash
cd -react-essentials-assignment/module12-redux
```

3. **Install dependencies:**
```bash
npm install
npm install @reduxjs/toolkit react-redux
```

4. **Start the application:**
```bash
npm start
```


The app will open in your browser at `http://localhost:3000`.


## 📸 Screenshots

![Login Form Image](/images/image.png)
![Order Image](/images/image2.png)
![Cart Image](/images/image3.png)

---

- **Author** : Ranit Saha (**[Coderooz](https://www.coderooz.in)**)
- **Contact** : _[Contact Me](https://www.coderooz.in/contact?subject=Query%2520about%2520Redux%2520Pizza%2520App&message=This%20query%20is%20about%20the%20project%20%22Redux%20Pizza%20App%3A%20Full-Scale%20User%20Signup%20%26%20Ordering%20System%22%20under%20the%20repository%20%22-react-essentials-assignment%22)_
