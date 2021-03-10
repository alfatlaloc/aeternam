const express = require("express");
const router = express.Router();
const EURUSDModel = require("../Models/Year");

router.get("/", async(req, res) => {
    console.log("RES" + req.body);
    try {
        const EURUSD = await EURUSDModel.find();
        res.json(EURUSD);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async(req, res) => {
    console.log("req: " + req.body.Annual_Change);
    const Year = new EURUSDModel({
        keyName: req.body.keyName,
        Date: req.body.Date,
        High: req.body.High,
        Low: req.body.Low,
        Close: req.body.Close,
        Open: req.body.Open,
        Annual_Change: req.body.Annual_Change,
        ACP: req.body.ACP

    });
    try {
        const newYear = await Year.save();
        res.status(201).json(newYear);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;