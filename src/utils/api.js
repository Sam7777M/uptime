import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

export const fetchUserProfile = async (username = 'shreeramk') => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Note: GitHub doesn't provide a direct API for contribution graph data
// We'll generate mock contribution data based on the pattern
export const generateContributionData = () => {
  const data = [];
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  // Generate data for the past year
  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const date = new Date(d);
    // Random contribution count (0-10) with some days having more activity
    const count = Math.floor(Math.random() * 11);
    data.push({
      date: date.toISOString().split('T')[0],
      count: count
    });
  }

  return data;
};

