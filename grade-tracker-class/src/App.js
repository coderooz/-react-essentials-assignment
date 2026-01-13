import React, { Component } from 'react';
import StudentList from './components/StudentsList';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // 1. Initial State
    this.state = {
      students: [],
      filter: 'all', // 'all', 'passed', 'failed'
      loading: true
    };
  }

  // 2. Lifecycle: componentDidMount (Simulate fetching data)
  componentDidMount() {
    console.log('App: Component Did Mount');
    // Simulating an API call with setTimeout
    this.timer = setTimeout(() => {
      const initialData = [
        { id: 1, name: 'Alice Johnson', grade: 85 },
        { id: 2, name: 'Bob Smith', grade: 42 },
        { id: 3, name: 'Charlie Brown', grade: 90 },
      ];
      this.setState({ students: initialData, loading: false });
    }, 1000);
  }

  // 3. Lifecycle: componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.students.length !== this.state.students.length) {
      console.log('App: Student list updated!');
    }
  }

  // 4. Lifecycle: componentWillUnmount
  componentWillUnmount() {
    console.log('App: Component Will Unmount');
    clearTimeout(this.timer); // Cleanup timer
  }

  // Handlers
  addStudent = (student) => {
    const newStudent = { ...student, id: Date.now() };
    this.setState((prevState) => ({
      students: [...prevState.students, newStudent]
    }));
  };

  removeStudent = (id) => {
    this.setState((prevState) => ({
      students: prevState.students.filter(student => student.id !== id)
    }));
  };

  updateFilter = (filterType) => {
    this.setState({ filter: filterType });
  };

  render() {
    const { students, loading, filter } = this.state;

    // Filter Logic
    let displayedStudents = students;
    if (filter === 'passed') {
      displayedStudents = students.filter(s => s.grade >= 50);
    } else if (filter === 'failed') {
      displayedStudents = students.filter(s => s.grade < 50);
    }

    return (
      <div className="app-container">
        <header className="app-header">
          <h1>🎓 Student Grade Tracker</h1>
          <p>Class Components & Lifecycle Methods</p>
        </header>

        <main>
          <AddStudentForm addStudent={this.addStudent} />

          <div className="filter-buttons">
            <button onClick={() => this.updateFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => this.updateFilter('passed')} className={filter === 'passed' ? 'active' : ''}>Passed</button>
            <button onClick={() => this.updateFilter('failed')} className={filter === 'failed' ? 'active' : ''}>Failed</button>
          </div>

          {loading ? (
            <p className="loading">Loading student data...</p>
          ) : (
            <StudentList 
              students={displayedStudents} 
              removeStudent={this.removeStudent} 
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;