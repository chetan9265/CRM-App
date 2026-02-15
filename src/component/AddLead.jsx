// components/AddLead.jsx
import React, { useState } from 'react';

const AddLead = ({ onAddLead, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    source: '99acres',
    status: 'New'
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter valid email address';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newLead = {
      ...formData,
      id: Date.now()
    };

    onAddLead(newLead);

    setFormData({
      name: '',
      phone: '',
      email: '',
      source: '99acres',
      status: 'New'
    });

    onClose();
  };

  return (
    <div className="add-modal-overlay">
      <div className="add-modal-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="add-modal-header">
          <h3 className="add-modal-title">
            <i className="bi bi-person-plus-fill"></i>
            Add New Lead
          </h3>
          <button className="add-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="add-modal-body">
          <form onSubmit={handleSubmit}>
            
            <div className="add-field-group">
              <label className="add-field-label">
                Name <span className="required-star">*</span>
              </label>
              <input
                type="text"
                className={`add-field-input `}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
              {errors.name && (
                <div className="add-error-text">{errors.name}</div>
              )}
            </div>

            <div className="add-field-group">
              <label className="add-field-label">
                Phone <span className="required-star">*</span>
              </label>
              <input
                type="tel"
                className={`add-field-input `}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
              />
              {errors.phone && (
                <div className="add-error-text">{errors.phone}</div>
              )}
              <div className="add-field-hint">10-digit number required</div>
            </div>

            <div className="add-field-group">
              <label className="add-field-label">
                Email <span className="required-star">*</span>
              </label>
              <input
                type="email"
                className={`add-field-input `}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
              {errors.email && (
                <div className="add-error-text">{errors.email}</div>
              )}
              <div className="add-field-hint">Valid email format required</div>
            </div>

            <div className="add-field-group">
              <label className="add-field-label">Source</label>
              <select
                className="add-field-select"
                name="source"
                value={formData.source}
                onChange={handleChange}
              >
                <option value="99acres">99acres</option>
                <option value="Magicbricks">Magicbricks</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Google">Google</option>
                <option value="Reference">Reference</option>
              </select>
            </div>

            <div className="add-field-group">
              <label className="add-field-label">Status</label>
              <select
                className="add-field-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="New">New</option>
                <option value="Followup">Followup</option>
                <option value="Converted">Converted</option>
                <option value="Lost">Lost</option>
              </select>
            </div>

            <div className="add-action-bar">
              <button type="button" className="add-btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="add-btn-primary">
                <i className="bi bi-plus-circle"></i>
                Add Lead
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLead;