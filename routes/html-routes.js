// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const router = require('express').Router();

router.route('/english_about')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "../public/english/About.html"))
    });
router.route('/english_camp')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/english/Camp.html"));
    });
router.route('/english_career')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/english/Career.html"));
    });
router.route('/english_contact')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/english/Contact.html"));
    });
router.route('/english_customer-reviews')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/english/Customer-Reviews.html"));
    });
router.route('/english_our-services')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/english/Our-Services.html"));
    });

// CZECH ROUTES
router.route('/czech_about')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "../public/czech/About.html"))
    });
router.route('/czech_camp')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/czech/Camp.html"));
    });
router.route('/czech_career')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/czech/Career.html"));
    });
router.route('/czech_contact')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/czech/Contact.html"));
    });
router.route('/czech_customer-reviews')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/czech/Customer-Reviews.html"));
    });
router.route('/czech_our-services')
    .get((req,res) => {
        res.sendFile(path.join(__dirname, "../public/czech/Our-Services.html"));
    });

module.exports = router