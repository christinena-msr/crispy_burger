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
        if (inserted.affectedRows === 0) {
            res.status(404).end();
        }
        res.status(200).end();
    });
});

router.put("/api/burger/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    //CHECK THIS
    burger.updateOne(req.body.devoured, condition, (updated) => {
        if(updated.changedRows === 0) {
            res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
