# Student Grade Tracker 🎓

A React application built using **Class-Based Components** to demonstrate mastery of React's legacy architecture, lifecycle methods, and state management.

This project was developed as part of the "Student Grade Tracker Application Using Class-Based Components & React Lifecycle Methods" assignment.

## 🚀 Features

- **Class Component Architecture**: Built entirely without Hooks, using `class extends Component`.
- **Lifecycle Management**:
  - `componentDidMount`: Simulates an API call to fetch initial student data.
  - `componentDidUpdate`: Logs updates when the student list changes.
  - `componentWillUnmount`: Cleans up timers/subscriptions to prevent memory leaks.
- **State Management**: Complex state handling for student lists, loading states, and filters.
- **Form Handling**: A controlled form component (`AddStudentForm`) with validation to add new records.
- **Dynamic Filtering**: Filter students by "All", "Passed", or "Failed".
- **Visual Feedback**: Dynamic styling based on grade status (Green for Pass, Red for Fail).

## 📂 Project Structure

```text
src/
├── components/
│   ├── AddStudentForm.js   # Form to add new students (Controlled Component)
│   ├── StudentList.js      # Iterates and renders the list of students
│   └── StudentItem.js      # Individual student display with Pass/Fail logic
├── App.js                  # Main Container & State Manager
├── App.css                 # Application styling
└── index.js                # Entry point

```

## 🛠️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/coderooz/-react-essentials-assignment.git
cd react-essentials-assignment/grade-tracker-class
```


2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```


4. Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the app in your browser.

## 📋 Assignment Requirements Met

This project fulfills the following assignment criteria:

1. **Introduction & Setup**:
* [x] Clean folder structure established.
* [x] Implemented `constructor()`, `super()`, and `this.state`.


2. **Interactivity & Lifecycle**:
* [x] `componentDidMount` used for initial data simulation (setTimeout).
* [x] `componentDidUpdate` logs changes to the console.
* [x] `componentWillUnmount` handles cleanup.


3. **Student Grade Tracker Logic**:
* [x] `StudentList` and `StudentItem` components created.
* [x] Functionality to remove students implemented.


4. **State Management**:
* [x] Validation logic (Grades 0-100).
* [x] Display rules (Pass >= 50, Fail < 50).
* [x] Filtering logic implemented.


5. **Forms & Events**:
* [x] `AddStudentForm` manages inputs via `onChange`.
* [x] Form clears automatically after submission.



## 📸 Screenshots
![Default Image](/images/image.png)


## ☁️ Deployment

This project is deployed and live at:
**[Insert Your Netlify/Vercel Link Here]**

---

**Author:** Ranit Saha (Coderooz)
**Tech Stack:** React (Class Components), JavaScript (ES6), CSS3

