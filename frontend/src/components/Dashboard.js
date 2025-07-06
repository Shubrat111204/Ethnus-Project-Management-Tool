import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data for demonstration
  const stats = [
    { title: 'Total Projects', value: '12', change: '+2', color: '#4CAF50' },
    { title: 'Active Tasks', value: '34', change: '+5', color: '#2196F3' },
    { title: 'Team Members', value: '8', change: '+1', color: '#FF9800' },
    { title: 'Completed Tasks', value: '127', change: '+15', color: '#9C27B0' }
  ];

  const recentProjects = [
    { id: 1, name: 'Website Redesign', progress: 75, deadline: '2024-02-15', status: 'In Progress' },
    { id: 2, name: 'Mobile App Development', progress: 45, deadline: '2024-03-01', status: 'In Progress' },
    { id: 3, name: 'Database Migration', progress: 90, deadline: '2024-01-30', status: 'Review' },
    { id: 4, name: 'Marketing Campaign', progress: 30, deadline: '2024-02-28', status: 'Planning' }
  ];

  const recentTasks = [
    { id: 1, title: 'Update user interface', project: 'Website Redesign', assignee: 'John Doe', priority: 'High' },
    { id: 2, title: 'Implement authentication', project: 'Mobile App', assignee: 'Jane Smith', priority: 'Medium' },
    { id: 3, title: 'Data backup verification', project: 'Database Migration', assignee: 'Bob Johnson', priority: 'High' },
    { id: 4, title: 'Content creation', project: 'Marketing Campaign', assignee: 'Alice Brown', priority: 'Low' }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return '#4CAF50';
    if (progress >= 50) return '#FF9800';
    return '#f44336';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#f44336';
      case 'Medium': return '#FF9800';
      case 'Low': return '#4CAF50';
      default: return '#757575';
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening with your projects.</p>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
              <span className="stat-change" style={{ color: stat.color }}>
                {stat.change} this week
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        {/* Recent Projects */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Projects</h2>
            <button className="btn btn-primary">View All</button>
          </div>
          <div className="projects-list">
            {recentProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>Due: {project.deadline}</p>
                  <span className={`status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${project.progress}%`,
                        backgroundColor: getProgressColor(project.progress)
                      }}
                    ></div>
                  </div>
                  <span className="progress-text">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Tasks</h2>
            <button className="btn btn-secondary">View All</button>
          </div>
          <div className="tasks-list">
            {recentTasks.map(task => (
              <div key={task.id} className="task-card">
                <div className="task-info">
                  <h4>{task.title}</h4>
                  <p>{task.project}</p>
                  <span className="task-assignee">Assigned to: {task.assignee}</span>
                </div>
                <div className="task-priority">
                  <span 
                    className="priority-badge"
                    style={{ backgroundColor: getPriorityColor(task.priority) }}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn">
            <i className="fas fa-plus"></i>
            <span>New Project</span>
          </button>
          <button className="action-btn">
            <i className="fas fa-tasks"></i>
            <span>Add Task</span>
          </button>
          <button className="action-btn">
            <i className="fas fa-users"></i>
            <span>Invite Member</span>
          </button>
          <button className="action-btn">
            <i className="fas fa-chart-bar"></i>
            <span>View Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
