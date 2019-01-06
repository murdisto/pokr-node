const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Session = require('../models/session');

const router = express.Router();

const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });


router.get('/', jwtAuth, (req, res, next) => {
  const userId = req.user.id;
  console.log("the user id is ", req.user.id);
  Session.find() 
    .sort({ createdAt: 'desc' })
    .then(sessions => {
      res.json(sessions);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', jwtAuth, (req, res, next) => {
  const newSession = req.body;
  const userId = req.user.id;
  newSession.userId = userId;
  console.log("the user id is ", userId);

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
