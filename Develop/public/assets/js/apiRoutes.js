var jsondb = require("../../../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res){
        res.json(jsondb);
    });

    app.post("/api/notes", function(req, res){
        var newNote = req.body;
        jsondb.push(newNote);
        res.json(newNote);
    })
}