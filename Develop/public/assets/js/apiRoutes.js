var jsondb = require("../../db/db.json");

module.exports = function(app) {
    app.get("/api/tables", function(req, res){
        res.json(jsondb);
    });

    
}