const orm = require("../config/orm.js");

const burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },
    insertOne: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, (res) => {
            callback(res);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;