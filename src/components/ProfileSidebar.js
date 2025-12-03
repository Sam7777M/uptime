import React from 'react';
import './ProfileSidebar.css';

const ProfileSidebar = ({ userProfile }) => {
  if (!userProfile) return null;

  return (
    <div className="profile-sidebar">
      <img 
        src={userProfile.avatar_url} 
        alt={userProfile.name || userProfile.login}
        className="profile-avatar"
      />
      
      <h1 className="profile-name">{userProfile.name || userProfile.login}</h1>
      <p className="profile-username">{userProfile.login}</p>
      
      <p className="profile-bio">{userProfile.bio || 'Director of Engineering @UptimeAI'}</p>
      
      <div className="profile-skills">
        <p>Python, Angular, Javascript, NodeJS, MongoDB, Influx DB, TimescaleDB, Streamsets, Kafka, AWS, Azure, HTML5, CSS</p>
      </div>

      <div className="profile-info">
        {userProfile.location && (
          <div className="info-item">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path>
            </svg>
            <span>{userProfile.location}</span>
          </div>
        )}
        
        {userProfile.email && (
          <div className="info-item">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16">
              <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.94 10.533a.75.75 0 0 1-.88 0L1.5 5.809v6.442Zm13.026-8.181L8.22 9.22a.25.25 0 0 1-.44 0L1.474 4.07a.25.25 0 0 1 .026-.32l.896-.717a.75.75 0 0 1 .94 0L8 7.5l4.664-3.467a.75.75 0 0 1 .94 0l.896.717a.25.25 0 0 1 .026.32Z"></path>
            </svg>
            <a href={`mailto:${userProfile.email}`}>{userProfile.email}</a>
          </div>
        )}
        
        {userProfile.blog && (
          <div className="info-item">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
            </svg>
            <a href={userProfile.blog.startsWith('http') ? userProfile.blog : `https://${userProfile.blog}`} target="_blank" rel="noopener noreferrer">
              {userProfile.blog.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
        
        <div className="info-item">
          <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16">
            <path d="M4.75 0a.75.75 0 0 1 .75.75v2.5h5V.75a.75.75 0 0 1 1.5 0v2.5h1.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 .75-.75H4V.75A.75.75 0 0 1 4.75 0ZM13.5 5.5h-11v8h11v-8Zm-6 6a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v2.25h1.5a.75.75 0 0 1 0 1.5H7.5Z"></path>
          </svg>
          <a href="https://linkedin.com/in/shreeramkushwaha" target="_blank" rel="noopener noreferrer">in/shreeramkushwaha</a>
        </div>
        
        <div className="info-item">
          <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16">
            <path d="M5.526 13.273c-.522 0-.823.23-1.227.466-.54.325-1.093.955-1.893.955-.932 0-1.406-.721-1.406-1.378 0-.653.542-1.136 1.093-1.136.522 0 .823.23 1.227.466.54.325 1.093.955 1.893.955.932 0 1.406-.721 1.406-1.378 0-.653-.542-1.136-1.093-1.136-.522 0-.823.23-1.227.466-.54.325-1.093.955-1.893.955-.932 0-1.406-.721-1.406-1.378 0-.653.542-1.136 1.093-1.136.522 0 .823.23 1.227.466.54.325 1.093.955 1.893.955.932 0 1.406-.721 1.406-1.378 0-.653-.542-1.136-1.093-1.136Z"></path>
          </svg>
          <a href="https://twitter.com/pom_fret" target="_blank" rel="noopener noreferrer">@pom_fret</a>
        </div>
      </div>

      <div className="profile-stats">
        <a href="#followers" className="stat-link">
          <span className="stat-number">{userProfile.followers || 11}</span>
          <span className="stat-label">followers</span>
        </a>
        <span className="stat-separator">·</span>
        <a href="#following" className="stat-link">
          <span className="stat-number">{userProfile.following || 3}</span>
          <span className="stat-label">following</span>
        </a>
      </div>

      <div className="profile-achievements">
        <div className="achievement-badge" style={{ backgroundColor: '#fbbf24' }}>YOLO</div>
        <div className="achievement-badge" style={{ backgroundColor: '#a855f7' }}>Y8</div>
        <div className="achievement-badge" style={{ backgroundColor: '#3b82f6' }}>x4</div>
      </div>

      <div className="profile-organizations">
        <div className="org-item">
          <div className="org-avatar" style={{ backgroundColor: '#6f42c1', color: '#fff' }}>U</div>
        </div>
      </div>

      <button className="edit-profile-btn">Edit profile</button>
    </div>
  );
};

export default ProfileSidebar;

