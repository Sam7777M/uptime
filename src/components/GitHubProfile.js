import React, { useState, useEffect } from 'react';
import './GitHubProfile.css';
import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './ProfileContent';
import ProfileNavTabs from './ProfileNavTabs';
import { fetchUserProfile } from '../utils/api';

const GitHubProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchUserProfile('shreeramk');
        setUserProfile(profile);
      } catch (error) {
        console.error('Failed to load profile:', error);
        // Fallback to mock data if API fails
        setUserProfile({
          login: 'shreeramk',
          name: 'Shreeram Kushwaha',
          avatar_url: 'https://via.placeholder.com/260',
          bio: 'Director of Engineering @UptimeAI',
          location: 'Bangalore, India',
          email: 'kushwaha.shreeram@gmail.com',
          blog: 'http://shreeramk.com',
          company: 'UptimeAI',
          followers: 11,
          following: 3,
          public_repos: 31
        });
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="github-profile-container">
      <header className="github-header">
        <div className="header-content">
          <div className="header-left">
            <svg className="github-logo" height="32" viewBox="0 0 16 16" width="32">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <input 
              type="text" 
              className="header-search" 
              placeholder="Type to search"
            />
          </div>
          <div className="header-right">
            <button className="header-icon-btn">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                <path d="M8 3.75a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 8 3.75Z"></path>
              </svg>
            </button>
            <button className="header-icon-btn">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                <path d="M8 3.75a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 8 3.75Z"></path>
              </svg>
            </button>
            <img 
              src={userProfile?.avatar_url || 'https://via.placeholder.com/20'} 
              alt="Profile" 
              className="header-avatar"
            />
          </div>
        </div>
      </header>

      <ProfileNavTabs 
        userProfile={userProfile}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="profile-main">
        <ProfileSidebar userProfile={userProfile} />
        <ProfileContent userProfile={userProfile} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default GitHubProfile;

