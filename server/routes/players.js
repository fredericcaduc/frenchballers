const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Get all French players
router.get('/', playerController.getFrenchPlayers);

// Get player by ID
router.get('/:id', playerController.getPlayerById);

// Get Wemby stats (special route)
router.get('/special/wemby', playerController.getWembyStats);

module.exports = router;