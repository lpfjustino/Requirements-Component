var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });

db.bind('summoners');

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function authenticate(summonername, password) {
    var deferred = Q.defer();

    db.summoners.findOne({ summonername: summonername }, function (err, summoner) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (summoner && bcrypt.compareSync(password, summoner.hash)) {
            // authentication successful
            deferred.resolve({
                _id: summoner._id,
                summonername: summoner.summonername,
                firstName: summoner.firstName,
                lastName: summoner.lastName,
                token: jwt.sign({ sub: summoner._id }, config.secret)
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.summoners.find().toArray(function (err, summoners) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return summoners (without hashed passwords)
        summoners = _.map(summoners, function (summoner) {
            return _.omit(summoner, 'hash');
        });

        deferred.resolve(summoners);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.summoners.findById(_id, function (err, summoner) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (summoner) {
            // return summoner (without hashed password)
            deferred.resolve(_.omit(summoner, 'hash'));
        } else {
            // summoner not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(summonerParam) {
    var deferred = Q.defer();

    // validation
    db.summoners.findOne(
        { summonername: summonerParam.summonername },
        function (err, summoner) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (summoner) {
                // summonername already exists
                deferred.reject('summonername "' + summonerParam.summonername + '" is already taken');
            } else {
                createsummoner();
            }
        });

    function createsummoner() {
        // set summoner object to summonerParam without the cleartext password
        var summoner = _.omit(summonerParam, 'password');

        // add hashed password to summoner object
        summoner.hash = bcrypt.hashSync(summonerParam.password, 10);

        db.summoners.insert(
            summoner,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, summonerParam) {
    var deferred = Q.defer();

    // validation
    db.summoners.findById(_id, function (err, summoner) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (summoner.summonername !== summonerParam.summonername) {
            // summonername has changed so check if the new summonername is already taken
            db.summoners.findOne(
                { summonername: summonerParam.summonername },
                function (err, summoner) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (summoner) {
                        // summonername already exists
                        deferred.reject('summonername "' + req.body.summonername + '" is already taken')
                    } else {
                        updatesummoner();
                    }
                });
        } else {
            updatesummoner();
        }
    });

    function updatesummoner() {
        // fields to update
        var set = {
            firstName: summonerParam.firstName,
            lastName: summonerParam.lastName,
            summonername: summonerParam.summonername,
        };

        // update password if it was entered
        if (summonerParam.password) {
            set.hash = bcrypt.hashSync(summonerParam.password, 10);
        }

        db.summoners.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.summoners.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}