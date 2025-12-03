import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './ContributionHeatmap.css';
import { generateContributionData } from '../utils/api';
import { mockActivity } from '../utils/mockData';

const ContributionHeatmap = () => {
  const [contributionData, setContributionData] = useState([]);

  useEffect(() => {
    // Generate contribution data
    const data = generateContributionData();
    setContributionData(data);
  }, []);

  // Transform data for react-calendar-heatmap
  const heatmapData = contributionData.map(item => ({
    date: item.date,
    count: item.count
  }));

  const getClassForValue = (value) => {
    if (!value || value.count === 0) {
      return 'color-empty';
    }
    if (value.count <= 2) {
      return 'color-scale-1';
    }
    if (value.count <= 4) {
      return 'color-scale-2';
    }
    if (value.count <= 6) {
      return 'color-scale-3';
    }
    return 'color-scale-4';
  };

  return (
    <div className="contribution-heatmap">
      <div className="contribution-header">
        <h2 className="contribution-title">
          {mockActivity.totalContributions} contributions in the last year
        </h2>
        <div className="contribution-controls">
          <select className="contribution-settings">
            <option>Contribution settings</option>
          </select>
          <select className="year-selector">
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>
      
      <div className="heatmap-container">
        <CalendarHeatmap
          startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
          endDate={new Date()}
          values={heatmapData}
          classForValue={getClassForValue}
          tooltipDataAttrs={(value) => {
            if (!value || !value.date) {
              return {};
            }
            return {
              'data-tip': `${value.count || 0} contributions on ${value.date}`
            };
          }}
        />
      </div>
      
      <div className="heatmap-legend">
        <span className="legend-label">Less</span>
        <div className="legend-squares">
          <div className="legend-square color-empty"></div>
          <div className="legend-square color-scale-1"></div>
          <div className="legend-square color-scale-2"></div>
          <div className="legend-square color-scale-3"></div>
          <div className="legend-square color-scale-4"></div>
        </div>
        <span className="legend-label">More</span>
      </div>

      <div className="organizations-list">
        <a href="#uptimeai" className="org-link">@UptimeAI</a>
        <a href="#timescale" className="org-link">@timescale</a>
      </div>
    </div>
  );
};

export default ContributionHeatmap;

