import React from 'react';
import './GitHubProfile.css';

const ProfileNavTabs = ({ userProfile, activeTab, onTabChange }) => {
  const handleTabClick = (e, tab) => {
    e.preventDefault();
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <nav className="profile-nav">
      <div className="nav-content">
        <a 
          href="#overview" 
          className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={(e) => handleTabClick(e, 'overview')}
        >
          Overview
        </a>
        <a 
          href="#repositories" 
          className={`nav-item ${activeTab === 'repositories' ? 'active' : ''}`}
          onClick={(e) => handleTabClick(e, 'repositories')}
        >
          Repositories <span className="nav-count">{userProfile?.public_repos || 31}</span>
        </a>
        <a 
          href="#projects" 
          className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={(e) => handleTabClick(e, 'projects')}
        >
          Projects
        </a>
        <a 
          href="#packages" 
          className={`nav-item ${activeTab === 'packages' ? 'active' : ''}`}
          onClick={(e) => handleTabClick(e, 'packages')}
        >
          Packages <span className="nav-count">5</span>
        </a>
        <a 
          href="#stars" 
          className="nav-item"
          onClick={(e) => e.preventDefault()}
        >
          Stars <span className="nav-count">6</span>
        </a>
      </div>
    </nav>
  );
};

export default ProfileNavTabs;

