var config = require('config.json');
var express = require('express');
var router = express.Router();
var summonerService = require('services/summoner.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.put('/:_id', update);
router.delete('/:_id', _delete);

module.exports = router;

function authenticate(req, res) {
    summonerService.authenticate(req.body.summonername, req.body.password)
        .then(function (summoner) {
            if (summoner) {
                // authentication successful
                res.send(summoner);
            } else {
                // authentication failed
                res.status(401).send('summonername or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function register(req, res) {
    summonerService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    summonerService.getAll()
        .then(function (summoners) {
            res.send(summoners);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getCurrent(req, res) {
    summonerService.getById(req.summoner.sub)
        .then(function (summoner) {
            if (summoner) {
                res.send(summoner);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    summonerService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    summonerService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}