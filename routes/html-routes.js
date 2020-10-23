// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const router = require('express').Router();

router.route('/about')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "../public/About.html"))
    });
router.route('/camp')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/Camp.html"));
    });
router.route('/career')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/Career.html"));
    });
router.route('/contact')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/Contact.html"));
    });
router.route('/customer-reviews')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/Customer-Reviews.html"));
    });
router.route('/our-services')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/Our-Services.html"));
    });

module.exports = router