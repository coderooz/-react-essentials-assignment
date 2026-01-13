import React, { Component } from 'react';
import StudentItem from './StudentItem';

class StudentList extends Component {
  render() {
    const { students, removeStudent } = this.props;

    if (students.length === 0) {
      return <p className="no-data">No students found.</p>;
    }

    return (
      <div className="student-list">
        <h2>Student Records ({students.length})</h2>
        <div className="list-header">
          <span>Name</span>
          <span>Grade</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        {students.map(student => (
          <StudentItem 
            key={student.id} 
            student={student} 
            removeStudent={removeStudent} 
          />
        ))}
      </div>
    );
  }
}

export default StudentList;