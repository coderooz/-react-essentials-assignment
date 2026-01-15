import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation Logic
  useEffect(() => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 chars";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.gender) newErrors.gender = "Please select a gender";
    if (!formData.terms) newErrors.terms = "You must accept terms";

    setErrors(newErrors);
    // Form is valid if errors object is empty
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      // Simulate API call
      console.log("Registered User:", formData);
    }
  };

  if (isSubmitted) {
    return (
      <div className="success-message">
        <h2>🎉 Registration Successful!</h2>
        <p>Welcome, {formData.name}. Please check your email.</p>
        <button onClick={() => setIsSubmitted(false)}>Register Another</button>
      </div>
    );
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <div className="form-group">
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>

      <div className="form-group">
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>

      <div className="form-group checkbox-group">
        <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
        <label>I accept the Terms & Conditions</label>
        {errors.terms && <span className="error d-block">{errors.terms}</span>}
      </div>

      <button type="submit" disabled={!isFormValid} className="submit-btn">Register</button>
    </form>
  );
};

export default RegistrationForm;