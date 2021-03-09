const express = require("express");
const router = express.Router();
const EURUSDModel = require("../Models/EURUSDModel");

router.get("/", async(req, res) => {
    console.log("RES" + req.body);
    try {
        const EURUSD = await EURUSDModel.find();
        res.json(EURUSD);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Creating one
router.post("/Years", async(req, res) => {
    console.log("req" + req.body.Nombre);
    const Extra = new ExtraM({
        Nombre: req.body.Nombre,
        Precio: req.body.Precio
    });
    try {
        const newExtra = await Extra.save();
        res.status(201).json(newExtra);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;