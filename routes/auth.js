const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  private

router.get('/', (req, res) => {
  res.send('get logged in user');
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  public

router.post('/', (req, res) => {
  res.send('log in user');
});
module.exports = router;
