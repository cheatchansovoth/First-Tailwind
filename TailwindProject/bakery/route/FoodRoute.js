const express = require('express');
const router = express.Router();
router.use(express.json())
const food= require('../db/food')

router.get('/', (req, res) => {
    food.find()
        .then(food => res.send(food))
        .catch(err => res.status(500).send(err));
});

module.exports = router;