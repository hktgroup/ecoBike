'use strict'
var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose')
var jwt = require('express-jwt');
var jwkRsa = require('jwks-rsa');
/*
var user=require('../models/userDataModel');
var stats=require('../models/statsDataModel');

*/
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
router.route('/user/data').post(function (req, res) {
            user.create({
                userName: req.body.username
                , userId: req.body.userId
                , userPassword: req.body.password
            }.function(err, data) {
                res.send(err);
            });

            router.use('/hi', jwtCheck, function (req, res) {});
            router.get('/', function (req, res) {});
            router.get('/', function (req, res) {});
            router.get('/', function (req, res) {});
            router.get('/', function (req, res) {});
            router.get('/', function (req, res) {});
            module.exports = router;