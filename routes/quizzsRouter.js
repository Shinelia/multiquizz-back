const express = require('express');
const router = express.Router();
const Quizz = require('../models/quizz.js');

router.get('/', (req, res) => {
    Quizz.find({})
    .populate('category')
    .exec((err, quizzs) => {
        if(err) throw new Error(err);
        else res.send(quizzs);
    })
})

router.get('/:slug', (req, res) => {
    Quizz.findOne({slug : req.params.slug}, (err, quizz) => {
        if(err) res.status(400).send(err);
        else res.send(quizz);
    })
})


module.exports = router;







// router.get('/:id', (req, res) => {
//     Quizz.findById(req.params.id, (err, quizz) => {
//         if(err) res.status(400).send(err);
//         else res.send(quizz);
//     })
// })