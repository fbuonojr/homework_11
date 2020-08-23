var path = require("path");

//look into router
module.exports = function(app){
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../../notes.html"));
    })
}

module.exports = function(app){
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../../index.html"));
    })
}