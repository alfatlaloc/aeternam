const express = require("express");
const router = express.Router();
const EURUSDModel = require("../Models/Month");

router.get("/", async(req, res) => {
    console.log("RES" + req.body);
    try {
        const EURUSD = await EURUSDModel.find();
        res.json(EURUSD);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/PerYear", async(req, res) => {
    console.log("RES" + req.body);
    let auxArr = new Array();
    let responseArray = new Array();
    let actualYear;
    try {
        const EURUSD = await EURUSDModel.find();

        console.log(EURUSD[0]);

        actualYear = new Date(EURUSD[0].Date).getFullYear();

        EURUSD.forEach(element => {
            if (actualYear === new Date(element.Date).getFullYear()) {
                auxArr.push(element);
            } else {
                responseArray.push(auxArr);
                auxArr = [];
                auxArr.push(element);
                actualYear = new Date(element.Date).getFullYear();
            }

        });

        res.json(responseArray);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async(req, res) => {
    const Year = new EURUSDModel({
        keyName: req.body.keyName,
        Date: req.body.Date,
        High: req.body.High,
        Low: req.body.Low,
        Close: req.body.Close,
        Open: req.body.Open,
        Change: req.body.Change
    });
    try {
        const newYear = await Year.save();
        res.status(201).json(newYear);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;