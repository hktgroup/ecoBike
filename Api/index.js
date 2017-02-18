'use strict'
var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose')
var jwt = require('express-jwt');
var jwkRsa = require('jwks-rsa');
var user = require('../models/userModel');
var stats = require('../models/statsModel');
var total = require('../models/totalModel');
const jwtCheck = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwkRsa.expressJwtSecret({
        cache: true
        , rateLimit: true
        , jwksRequestsPerMinute: 5
        , jwksUri: `ecobik.auth0.com/.well-known/jwks.json`
    }), // Validate the audience and the issuer.
    audience: '2YGDWSgclvWwDvZ2ScGtW3wFbFkCCTBL'
    , issuer: `ecobik.auth0.com`
    , algorithms: ['RS256']
});
//create new user
router.route('/user/data').post(function (req, res) {
    user.create({
        userName: req.body.username
        , userID: req.body.userId
        , password: req.body.password
        , name: req.body.name
        , gender: req.body.name
    }, function (err, data) {
        res.send(err);
    });
});
//find user data by id using GET
router.route('/user/data/:id').get(function (req, res) {
    user.findByid(req.param.id, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});
//get all data(later use for social)
router.route('/stats/data').get(function (req, res) {
    stats.find(function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});
//create new stats
router.route('/stats/data').post(function (req, res) {
    stats.create({
        userId: req.body.userID
        , calsBurned: req.body.calsBurned
        , cEmission: req.body.cEmission
        , cDistance: req.body.cDistance
    , }, function (err, data) {
        res.send(err);
    });
});
//find stats data by id by GET
router.route('/stats/data/:id').get(function (req, res) {
        stats.findById(req.params.id, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.send(data);
        });
    })
    //update stat data with id using PUT
    .put(function (req, res) {
        stats.findById(req.params.id, function (err, data) {
            if (err) {
                res.send(err);
            }
            data.distTravel = req.body.distTravel;
            data.calsBurned = req.body.calsBurned;
            data.cEmission = req.body.cEmission;
            data.userID = req.body.userId;
            data.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({
                    message: "stats updated successfully"
                });
            })
        });
    });
router.route('/total/data/:id').get(function (req, res) {
        total.findById(req.params.id, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.send(data);
        });
    })
    //update stat data with id using PUT
    .put(function (req, res) {
        total.findById(req.params.id, function (err, data) {
            if (err) {
                res.send(err);
            }
            data.totalDist = req.body.totalDist;
            data.totalCals = req.body.totalCalss;
            data.totalEmiss = req.body.totalEmiss;
            data.userID = req.body.userId;
            data.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({
                    message: "total updated successfully"
                });
            })
        });
    });
router.use('/hi', jwtCheck, function (req, res) {});
module.exports = router;