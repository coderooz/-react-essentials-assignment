import React, { Component } from 'react';

class AddStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      grade: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, grade } = this.state;

    // Validation
    if (!name || grade === '') return;
    if (grade < 0 || grade > 100) {
      alert('Grade must be between 0 and 100');
      return;
    }

    // Pass data up to App component
    this.props.addStudent({
      name: name,
      grade: Number(grade)
    });

    // Reset Form
    this.setState({ name: '', grade: '' });
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3>Add New Student</h3>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Student Name" 
            value={this.state.name} 
            onChange={this.handleChange} 
            required
          />
          <input 
            type="number" 
            name="grade" 
            placeholder="Grade (0-100)" 
            value={this.state.grade} 
            onChange={this.handleChange} 
            required
          />
          <button type="submit" className="add-btn">Add Student</button>
        </div>
      </form>
    );
  }
}

export default AddStudentForm;