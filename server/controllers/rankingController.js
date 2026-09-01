const nbaService = require('../services/nbaService');

const getWeeklyRanking = async (req, res) => {
  try {
    const ranking = await nbaService.getWeeklyRanking();
    res.json(ranking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMonthlyRanking = async (req, res) => {
  try {
    const ranking = await nbaService.getMonthlyRanking();
    res.json(ranking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getWeeklyRanking,
  getMonthlyRanking
};