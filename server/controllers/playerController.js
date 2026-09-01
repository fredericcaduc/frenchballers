const nbaService = require('../services/nbaService');

// French NBA players list
const FRENCH_PLAYERS = [
  { id: 'victor-wembanyama', name: 'Victor Wembanyama', team: 'SAS' },
  { id: 'timothe-luwawu', name: 'Timothe Luwawu-Cabarrot', team: 'TBD' },
  { id: 'nicolas-batum', name: 'Nicolas Batum', team: 'TBD' },
  // Add more French players
];

const getFrenchPlayers = async (req, res) => {
  try {
    const players = await Promise.all(
      FRENCH_PLAYERS.map(player => nbaService.getPlayerStats(player))
    );
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPlayerById = async (req, res) => {
  try {
    const player = FRENCH_PLAYERS.find(p => p.id === req.params.id);
    if (!player) {
      return res.status(404).json({ error: 'Joueur non trouvé' });
    }
    const stats = await nbaService.getPlayerStats(player);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWembyStats = async (req, res) => {
  try {
    const wemby = FRENCH_PLAYERS.find(p => p.id === 'victor-wembanyama');
    const stats = await nbaService.getPlayerStats(wemby);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getFrenchPlayers,
  getPlayerById,
  getWembyStats
};