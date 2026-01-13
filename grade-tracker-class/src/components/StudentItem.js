import React, { Component } from 'react';

class StudentItem extends Component {
  // Helper method to determine status
  getStatus(grade) {
    return grade >= 50 ? 'Passed' : 'Failed';
  }

  render() {
    const { student, removeStudent } = this.props;
    const status = this.getStatus(student.grade);
    const statusClass = status === 'Passed' ? 'status-pass' : 'status-fail';

    return (
      <div className="student-item">
        <div className="student-name">{student.name}</div>
        <div className="student-grade">{student.grade}%</div>
        <div className={`student-status ${statusClass}`}>
          {status}
        </div>
        <button 
          className="delete-btn" 
          onClick={() => removeStudent(student.id)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default StudentItem;