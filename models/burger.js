const orm = require("../config/orm.js");

const burger = {
    all: function(callback) {
        orm.all(tableName, (res) => {
            callback(res);
        });
    },
    insertOne: function(cols, vals, callback) {
        orm.insertOne(tableName, cols, vals, (res) => {
            callback(res);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne(tableName, objColVals, condition, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;