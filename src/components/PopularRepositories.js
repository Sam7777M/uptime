import React from 'react';
import './PopularRepositories.css';
import { mockRepositories } from '../utils/mockData';

const PopularRepositories = () => {
  const getLanguageColor = (language) => {
    const colors = {
      'Jupyter Notebook': '#DA5B0B',
      'Dart': '#00B4AB',
      'JavaScript': '#F1E05A',
      'TypeScript': '#3178C6'
    };
    return colors[language] || '#ccc';
  };

  return (
    <div className="popular-repositories">
      <div className="section-header">
        <h2 className="section-title">Popular repositories</h2>
        <a href="#customize" className="customize-link">Customize your pins</a>
      </div>
      
      <div className="repositories-grid">
        {mockRepositories.map((repo) => (
          <div key={repo.id} className="repository-card">
            <div className="repo-header">
              <a href={`#${repo.fullName}`} className="repo-name">
                {repo.name}
              </a>
              <span className="repo-visibility">{repo.isPublic ? 'Public' : 'Private'}</span>
            </div>
            <p className="repo-description">{repo.description}</p>
            <div className="repo-footer">
              {repo.language && (
                <div className="repo-language">
                  <span 
                    className="language-dot" 
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  ></span>
                  <span>{repo.language}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRepositories;

