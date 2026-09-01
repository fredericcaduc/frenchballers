import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_URL,
});

export const getYesterdayStats = async () => {
  const response = await apiClient.get('/stats/yesterday');
  return response.data;
};

export const getWeekStats = async () => {
  const response = await apiClient.get('/stats/week');
  return response.data;
};

export const getMonthStats = async () => {
  const response = await apiClient.get('/stats/month');
  return response.data;
};

export const getWeeklyRanking = async () => {
  const response = await apiClient.get('/rankings/week');
  return response.data;
};

export const getMonthlyRanking = async () => {
  const response = await apiClient.get('/rankings/month');
  return response.data;
};

export const getFrenchPlayers = async () => {
  const response = await apiClient.get('/players');
  return response.data;
};

export const getWembyStats = async () => {
  const response = await apiClient.get('/players/special/wemby');
  return response.data;
};

export default apiClient;