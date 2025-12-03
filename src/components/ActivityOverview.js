import React from 'react';
import './ActivityOverview.css';
import { mockActivity } from '../utils/mockData';

const ActivityOverview = () => {
  const { monthContributions, contributedRepos, codeReviewStats } = mockActivity;

  return (
    <div className="activity-overview">
      <h2 className="activity-title">Activity overview</h2>
      
      <div className="contributed-repos">
        <p>
          Contributed to{' '}
          {contributedRepos.map((repo, index) => (
            <React.Fragment key={repo}>
              <a href={`#${repo}`} className="repo-link">{repo}</a>
              {index < contributedRepos.length - 1 && ', '}
            </React.Fragment>
          ))}{' '}
          and {13} other repositories
        </p>
      </div>

      <div className="code-review-graph">
        <div className="review-stats">
          <div className="review-stat">
            <div className="stat-circle" style={{ 
              background: `conic-gradient(#0969da 0% ${codeReviewStats.commits}%, #e1e4e8 ${codeReviewStats.commits}% 100%)`
            }}>
              <div className="stat-inner">
                <span className="stat-percentage">{codeReviewStats.commits}%</span>
                <span className="stat-label">Commits</span>
              </div>
            </div>
          </div>
          <div className="review-stat">
            <div className="stat-circle" style={{ 
              background: `conic-gradient(#a371f7 0% ${codeReviewStats.pullRequests}%, #e1e4e8 ${codeReviewStats.pullRequests}% 100%)`
            }}>
              <div className="stat-inner">
                <span className="stat-percentage">{codeReviewStats.pullRequests}%</span>
                <span className="stat-label">Pull requests</span>
              </div>
            </div>
          </div>
          <div className="review-stat">
            <div className="stat-circle" style={{ 
              background: `conic-gradient(#e1e4e8 0% 100%)`
            }}>
              <div className="stat-inner">
                <span className="stat-percentage">0%</span>
                <span className="stat-label">Issues</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contribution-activity">
        <h3 className="activity-month-title">
          Contribution activity ({monthContributions.month})
        </h3>
        
        <div className="activity-stats">
          <p>
            Created <strong>{monthContributions.commits} commits</strong> in{' '}
            <strong>{monthContributions.repositories} repositories</strong>
          </p>
        </div>

        <div className="pull-requests-section">
          <p>
            Opened <strong>{monthContributions.pullRequests} pull requests</strong> in{' '}
            <strong>{monthContributions.prDetails.length} repositories</strong>:
          </p>
          <ul className="pr-list">
            {monthContributions.prDetails.map((pr, index) => (
              <li key={index} className="pr-item">
                <a href={`#${pr.repo}`} className="pr-repo-link">{pr.repo}</a>:{' '}
                <span className="pr-count">{pr.merged} merged</span>
                {pr.open > 0 && (
                  <>
                    , <span className="pr-count">{pr.open} open</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button className="show-more-btn">Show more activity</button>
      </div>

      <div className="profile-guide">
        <p className="guide-text">
          Seeing something unexpected? Take a look at the{' '}
          <a href="#guide" className="guide-link">GitHub profile guide</a>.
        </p>
      </div>
    </div>
  );
};

export default ActivityOverview;

