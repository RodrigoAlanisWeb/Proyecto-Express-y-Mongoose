const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/',async (req,res)=>{
    const tasks = await Task.find();
    res.render('index',{
        'data' : tasks,
    });
});

router.post('/add',(req,res)=>{
    const task =  new Task(req.body);
    const query = task.save();
    res.redirect('/')
})

module.exports = router;