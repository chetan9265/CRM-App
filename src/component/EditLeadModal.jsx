// components/EditLeadModal.jsx
import React, { useState } from 'react';

const EditLeadModal = ({ lead, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(lead);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="add-modal-overlay" >
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-head">
          <h3 className="modal-heading">
            <i className="bi bi-pencil-square"></i>
            Edit Lead
          </h3>
          <button className="modal-exit" onClick={onClose}>×</button>
        </div>

        {/* Body */}
        <div className="modal-content-area">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="field-group">
              <label className="field-label">Name</label>
              <input
                type="text"
                className="field-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </div>

            {/* Phone */}
            <div className="field-group">
              <label className="field-label">Phone</label>
              <input
                type="text"
                className="field-input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            {/* Email */}
            <div className="field-group">
              <label className="field-label">Email</label>
              <input
                type="email"
                className="field-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            {/* Source - FIXED: Changed from add-field-group to field-group */}
            <div className="field-group">
              <label className="field-label">Source</label>
              <select
                className="field-select"
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

            {/* Status - FIXED: Changed from add-field-group to field-group */}
            <div className="field-group">
              <label className="field-label">Status</label>
              <select
                className="field-select"
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

            {/* Buttons */}
            <div className="action-bar">
              <button type="button" className="action-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="action-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditLeadModal;