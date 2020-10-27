// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
const router = require('express').Router()
// Requiring our models                                                                                                                                                 
var db = require("../../models");


// GET route for retreiving all comments
router.get("/api/comments/", function(req, res) {
    db.commentsList.findAll({
    })
    .then(function(dbcommentsList){    `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           `
        res.json(dbcommentsList)
    })
    .catch(function(err) {
        res.json(err)
    })
})

// POST route for saving a comment to the database
router.post("/api/comments/", function(req,res) {
    console.log(req.body)
    db.commentsList.create({
        name: req.body.name,
        title: req.body.title,
        body: req.body.body
    })
    .then(function(dbcommentsList) {
        res.json(dbcommentsList);
    })
    .catch(function(err) {
        res.json(err)
    })
})

module.exports = router;