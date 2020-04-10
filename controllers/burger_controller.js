const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        hbsObj = {
            burger: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne("burger_name", req.body.name, (inserted) => {
        console.log("Success! Burger " + inserted + " added");
        res.json({ id: res.insertId });
    });
});

router.put("/api/burger/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.updateOne({ burger }, condition, (updated) => {
        if(updated.changedRows === 0) {
            res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
