const axios = require('axios');

const NBA_API_BASE_URL = process.env.NBA_API_BASE_URL || 'https://api.balldontlie.io/api/v1';
const NBA_API_KEY = process.env.NBA_API_KEY;

const nbaClient = axios.create({
  baseURL: NBA_API_BASE_URL,
  headers: {
    'Authorization': NBA_API_KEY
  }
});

const getPlayerStats = async (player) => {
  try {
    const response = await nbaClient.get(`/players`, {
      params: { search: player.name }
    });
    return response.data.data[0];
  } catch (error) {
    console.error(`Erreur lors de la récupération des stats de ${player.name}:`, error);
    return null;
  }
};

const getYesterdayStats = async () => {
  try {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const date = yesterday.toISOString().split('T')[0];
    
    const response = await nbaClient.get(`/stats`, {
      params: { dates: [date] }
    });
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des stats de hier:', error);
    return [];
  }
};

const getWeekStats = async () => {
  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    
    const response = await nbaClient.get(`/stats`, {
      params: {
        start_date: startDate.toISOString().split('T')[0],
        end_date: endDate.toISOString().split('T')[0]
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des stats de la semaine:', error);
    return [];
  }
};

const getMonthStats = async () => {
  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    
    const response = await nbaClient.get(`/stats`, {
      params: {
        start_date: startDate.toISOString().split('T')[0],
        end_date: endDate.toISOString().split('T')[0]
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des stats du mois:', error);
    return [];
  }
};

const getWeeklyRanking = async () => {
  // Implement power ranking calculation
  return [];
};

const getMonthlyRanking = async () => {
  // Implement power ranking calculation
  return [];
};

module.exports = {
  getPlayerStats,
  getYesterdayStats,
  getWeekStats,
  getMonthStats,
  getWeeklyRanking,
  getMonthlyRanking
};