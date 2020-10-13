const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const Users = require('./user-model');

router.post('/', (req,res) => {
    const userName = req.body.username;
    
    Users
    .login(userName)
    .then(user => {
      if(!user.length) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }

      if(bcrypt.compareSync(req.body.password, user[0].password)) {
        return res.status(202).json({ message: 'Logged in :)' });
      } else {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;