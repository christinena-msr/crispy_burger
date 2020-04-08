const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all(function(data) {
        hbsObj = {
            burger: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne(cols, vals, (res) => {
        res.json({ id: res.insertId });
    });
});

router.put("/api/burger/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.updateOne({ burger }, condition, (res) => {
        if(res.changedRows === 0) {
            res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
