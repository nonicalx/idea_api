const express = require('express');
const Idea = require('../models/ideas.model')


const router = express.Router()

router.get('/',(req, res)=>{
    Idea.find()
    .then(ideas =>res.json(ideas))
    .catch(err=>res.status(400).json('Error: '+err))
})

router.post('/add', (req, res)=>{
    console.log("body", req.body)
    const text = req.body.text;
    const time = Date.parse(req.body.time);

    const newIdea = new Idea({
        text,time
    });

    newIdea.save().then(()=>{res.status(200).json('idea added')})
    .catch(err=>{res.status(400).json('Error: '+err)})
})



module.exports = router;