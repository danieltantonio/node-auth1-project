const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const Users = require('./user-model');

router.get('/', (req,res) => {
  Users
  .get()
  .then(users => {
      res.status(200).json(users);
  })
  .catch(err => {
      res.status(500).json(err)
  });
});

module.exports = router;