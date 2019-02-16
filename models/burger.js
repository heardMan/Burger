const orm = require("../config/orm");

var burger = {
    all: function (callback) {
        var table = 'burgers';
        orm.selectAll(table, function(result) {
            
            var data = [];
            result.forEach(burger => {
                //var eaten = burger.devoured ? true : false;
                data.push({id: burger.ID, name: burger.burger_name, devoured: burger.devoured, img: burger.img });
            });
            //console.log(data);
            callback(data);
        });
    },
    cook: function (burger_name) {
        orm.insertOne(burger_name);
    },
    devour: function (id) {
        orm.updateOne(id, "devoured", "1");
    }
}

module.exports = burger;

//burger.cook("test");