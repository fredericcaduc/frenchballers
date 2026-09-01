const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

// Get yesterday's stats
router.get('/yesterday', statsController.getYesterdayStats);

// Get week stats
router.get('/week', statsController.getWeekStats);

// Get month stats
router.get('/month', statsController.getMonthStats);

module.exports = router;