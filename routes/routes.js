const express =  require('express');
const router = express.Router();

// getting the router module
const user_profile = require('../controllers/profiles');

// using a parameter to get the user
router.get('/profile/:username', user_profile.profile);
router.get('/profile/:username/repo', user_profile.getRepo);

module.exports = router;