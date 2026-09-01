const nbaService = require('../services/nbaService');

const getYesterdayStats = async (req, res) => {
  try {
    const stats = await nbaService.getYesterdayStats();
    // Sort from least impressive to most impressive
    const sorted = stats.sort((a, b) => a.score - b.score);
    res.json(sorted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWeekStats = async (req, res) => {
  try {
    const stats = await nbaService.getWeekStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMonthStats = async (req, res) => {
  try {
    const stats = await nbaService.getMonthStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getYesterdayStats,
  getWeekStats,
  getMonthStats
};