const connection = require("./connection");

const orm = {
    selectAll: function(table, callback){
        const query = "SELECT * FROM ??;";
        connection.query(query, [table],function (error, results, fields) {
            if (error) throw error;
            return callback(results);
          });
    },
    insertOne: function(burger_name){
        var randomNum = Math.floor(Math.random() * 6);  
        const query = `INSERT INTO burgers (burger_name, devoured, img)
                        VALUES (?, 0, ?);`;
        connection.query(query, [burger_name, randomNum], function (error, results, fields) {
            if (error) throw error;
            console.log(results);
          });
    },
    updateOne: function(id, col, val){
        const query = `UPDATE burgers
                        SET ?? = ?
                        WHERE ID = ?;`;
        connection.query(query, [col, val, id], function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            return results;
          });
    }

}

module.exports = orm;