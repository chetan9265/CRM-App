// components/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const summaryCards = [
    { 
      title: 'Total Leads', 
      value: '156', 
      icon: 'bi-people-fill', 
      color: '#667eea', 
      change: '+12%' 
    },
    { 
      title: 'New Leads', 
      value: '24', 
      icon: 'bi-person-plus-fill', 
      color: '#4caf50', 
      change: '+5%' 
    },
    { 
      title: 'Converted Leads', 
      value: '89', 
      icon: 'bi-check-circle-fill', 
      color: '#ff9800', 
      change: '+18%' 
    }
  ];

  const goToLeads = () => {
    navigate('/leads');
  };

  return (
    <div className="dashboard-page">
      <div className="page-title my-4">
        <h1 className="h2 fw-bold text-dark">Dashboard</h1>
      </div>

      <div className="cards-grid">
        {summaryCards.map((card, index) => (
          <div 
            key={index} 
            className="summary-card"
            onClick={goToLeads}
          >
            <div className="card-icon" style={{ background: `${card.color}20` }}>
              <i className={`bi ${card.icon}`} style={{ color: card.color }}></i>
            </div>
            <div className="card-info">
              <h3>{card.value}</h3>
              <p>{card.title}</p>
            </div>
            <span className="card-change" style={{ color: card.color }}>
              {card.change}
            </span>
          </div>
        ))}
      </div>

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-white border-0 px-4 py-3">
          <h3 className="h5 fw-semibold text-dark mb-0 d-flex align-items-center">
            <i className="bi bi-clock-history text-primary me-2"></i>
            Recent Activity
          </h3>
        </div>
        <div className="list-group list-group-flush">
          <button 
            className="list-group-item list-group-item-action border-0 py-3 px-4 d-flex align-items-center"
            onClick={goToLeads}
          >
            <div className="bg-primary bg-opacity-10 rounded-3 p-2 me-3">
              <i className="bi bi-person-plus-fill text-primary"></i>
            </div>
            <div className="flex-grow-1 text-start">
              <p className="mb-1 fw-medium">
                <span className="fw-bold">New lead added</span> - Rahul Sharma
              </p>
              <small className="text-secondary">
                <i className="bi bi-clock me-1"></i>
                5 minutes ago
              </small>
            </div>
            <i className="bi bi-chevron-right text-secondary opacity-50"></i>
          </button>
          <button 
            className="list-group-item list-group-item-action border-0 py-3 px-4 d-flex align-items-center"
            onClick={goToLeads}
          >
            <div className="bg-warning bg-opacity-10 rounded-3 p-2 me-3">
              <i className="bi bi-pencil-fill text-warning"></i>
            </div>
            <div className="flex-grow-1 text-start">
              <p className="mb-1 fw-medium">
                <span className="fw-bold">Lead updated</span> - Amit Patel
              </p>
              <small className="text-secondary">
                <i className="bi bi-clock me-1"></i>
                1 hour ago
              </small>
            </div>
            <i className="bi bi-chevron-right text-secondary opacity-50"></i>
          </button>
          <button 
            className="list-group-item list-group-item-action border-0 py-3 px-4 d-flex align-items-center"
            onClick={goToLeads}
          >
            <div className="bg-success bg-opacity-10 rounded-3 p-2 me-3">
              <i className="bi bi-check-circle-fill text-success"></i>
            </div>
            <div className="flex-grow-1 text-start">
              <p className="mb-1 fw-medium">
                <span className="fw-bold">Lead converted</span> - Neha Singh
              </p>
              <small className="text-secondary">
                <i className="bi bi-clock me-1"></i>
                3 hours ago
              </small>
            </div>
            <i className="bi bi-chevron-right text-secondary opacity-50"></i>
          </button>
        </div>

        <div className="card-footer bg-white border-0 px-4 py-3">
          <button 
            className="btn btn-outline-primary w-100 py-2 rounded-3"
            onClick={goToLeads}
          >
            <i className="bi bi-eye me-2"></i>
            View All Activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;