const express = require('express');
const mongoose = require('mongoose');

const Session = require('../models/session');

const router = express.Router();

router.get('/', (req, res, next) => {
  Session.find()
    .then(sessions => {
      res.json(sessions);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const newSession = req.body;
  Session.create(newSession)
    .then(result => {
      //gonna have to work on this path
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => {
      next(err);
    });
});



module.exports = router;
