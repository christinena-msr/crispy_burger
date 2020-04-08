const connection = require("./connection.js");

const orm = {
    selectAll: function(tableName, queryCallback) {
        let query = `Select * from ${tableName}`;
        connection.query(query, (err, res) => {
            if(err) throw err;
            queryCallback(res);
        })
    },
    insertOne: function(tableName, cols, vals, queryCallback) {
        let query = `Insert into ${tableName}`;
        // comma separated values for columns
        query += `(${cols})`;
        // comma separated values for values
        query += `values (${vals})`;
        connection.query(query, params, (err, res) => {
            if(err) throw err;
            queryCallback(res);
        })
    },
    updateOne: function(tableName, objColVals, condition, queryCallback) {
        let query = `Update ${tableName}`;
        // col1 = val1, col2 = val2
        query += ` set ${objColVals}`;
        // select row to update
        query += ` where ${condition}`;
        connection.query(query, (err, res) => {
            if(err) throw err;
            queryCallback(res);
        })
    }
};
module.exports = orm;