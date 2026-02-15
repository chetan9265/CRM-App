// components/Leads.jsx - Simple version with browser confirm
import React, { useState } from 'react';
import EditLeadModal from '../component/EditLeadModal';
import AddLead from '../component/AddLead';
import { toast } from 'react-toastify';

const Leads = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: "Rahul Sharma", phone: "9876543210", email: "rahul@email.com", source: "99acres", status: "New" },
    { id: 2, name: "Amit Patel", phone: "9123456789", email: "amit@email.com", source: "Magicbricks", status: "Followup" },
    { id: 3, name: "Neha Singh", phone: "9988776655", email: "neha@email.com", source: "Facebook", status: "Converted" }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (lead) => {
    setSelectedLead(lead);
    setShowEditModal(true);
  };

  const handleUpdate = (updatedLead) => {
    setLeads(leads.map(lead => 
      lead.id === updatedLead.id ? updatedLead : lead
    ));
    setShowEditModal(false);
    setSelectedLead(null);
    toast.success("Lead Updated Successfully");
  };

  const handleAddLead = (newLead) => {
    const leadWithId = {
      ...newLead,
      id: leads.length + 1
    };
    setLeads([...leads, leadWithId]);
    setShowAddModal(false);
    toast.success("Lead Added Successfully");
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      setLeads(leads.filter(lead => lead.id !== id));
      toast.warning("Lead Deleted Successfully");
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'New': return 'bg-primary';
      case 'Followup': return 'bg-warning text-dark';
      case 'Converted': return 'bg-success';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="container-fluid px-4 py-4">
      <div className="d-flex justify-content-between flex-wrap align-items-center mb-4">
        <h1 className="h3 fw-bold">Lead Management</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}  
        >
          <i className="bi bi-plus-lg me-2"></i>
          Add New Lead
        </button>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-secondary"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6 text-end">
          <span className="text-secondary">
            Total Leads: <strong className="text-dark">{filteredLeads.length}</strong>
          </span>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="py-3">Phone</th>
                <th className="py-3">Email</th>
                <th className="py-3">Source</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-4 py-3 fw-medium">{lead.name}</td>
                    <td className="py-3">{lead.phone}</td>
                    <td className="py-3">{lead.email}</td>
                    <td className="py-3">
                      <span className="badge bg-light text-dark px-3 py-2">
                        {lead.source}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`badge ${getStatusBadge(lead.status)} px-3 py-2`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <div className="d-flex justify-content-center gap-2">
                        <button 
                          className="btn btn-sm btn-outline-primary d-inline-flex align-items-center justify-content-center"
                          onClick={() => handleEdit(lead)}
                          title="Edit Lead"
                          style={{ 
                            width: '36px', 
                            height: '36px', 
                            padding: '0',
                            borderRadius: '6px'
                          }}
                        >
                          <i className="bi bi-pencil fs-6"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger d-inline-flex align-items-center justify-content-center"
                          onClick={() => handleDelete(lead.id, lead.name)}
                          title="Delete Lead"
                          style={{ 
                            width: '36px', 
                            height: '36px', 
                            padding: '0',
                            borderRadius: '6px'
                          }}
                        >
                          <i className="bi bi-trash fs-6"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-secondary">
                    <i className="bi bi-inbox fs-1 d-block mb-3"></i>
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showEditModal && (
        <EditLeadModal
          lead={selectedLead}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleUpdate}
        />
      )}

      {showAddModal && (
        <AddLead
          onAddLead={handleAddLead}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
};

export default Leads;