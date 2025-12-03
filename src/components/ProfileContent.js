import React from 'react';
import './ProfileContent.css';
import PopularRepositories from './PopularRepositories';
import ContributionHeatmap from './ContributionHeatmap';
import ActivityOverview from './ActivityOverview';

const ProfileContent = ({ userProfile, activeTab = 'overview' }) => {
  return (
    <div className="profile-content" data-tab={activeTab}>
      {activeTab === 'overview' && (
        <div className="overview-content">
          <PopularRepositories />
          <ContributionHeatmap />
          <ActivityOverview />
        </div>
      )}
      
      {activeTab === 'repositories' && (
        <div className="tab-content">
          <h2>Repositories</h2>
          <p>Repositories content will be displayed here</p>
        </div>
      )}
      
      {activeTab === 'projects' && (
        <div className="tab-content">
          <h2>Projects</h2>
          <p>Projects content will be displayed here</p>
        </div>
      )}
      
      {activeTab === 'packages' && (
        <div className="tab-content">
          <h2>Packages</h2>
          <p>Packages content will be displayed here</p>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;

