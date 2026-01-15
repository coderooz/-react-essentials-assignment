import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setErrors, submitUserSuccess } from '../features/userSlice';

const SignupForm = () => {
  const dispatch = useDispatch();
  const { formData, errors, isSubmitted } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(updateField({ name, value: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Min 6 chars";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords match error";
    if (!formData.terms) newErrors.terms = "Accept terms";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      dispatch(setErrors(validationErrors));
    } else {
      dispatch(submitUserSuccess());
    }
  };

  if (isSubmitted) return <div className="success-box"><h2>Welcome, {formData.name}!</h2></div>;

  return (
    <div className="form-card">
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        <span className="error">{errors.name}</span>

        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <span className="error">{errors.email}</span>

        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <span className="error">{errors.password}</span>

        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        <span className="error">{errors.confirmPassword}</span>

        <label>
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} /> Accept Terms
        </label>
        <span className="error">{errors.terms}</span>

        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;