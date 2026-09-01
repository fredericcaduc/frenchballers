const express = require('express');
const router = express.Router();
const rankingController = require('../controllers/rankingController');

// Get weekly power ranking
router.get('/week', rankingController.getWeeklyRanking);

// Get monthly power ranking
router.get('/month', rankingController.getMonthlyRanking);

module.exports = router;