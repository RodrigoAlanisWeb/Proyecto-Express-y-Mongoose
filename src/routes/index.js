const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/',async (req,res)=>{
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index',{
        data : tasks,
    });
});

router.post('/add',async (req,res)=>{
    const task =  new Task(req.body);
    const query = task.save();
    res.redirect('/');
})

router.post('/save/:id',async (req,res)=>{
    const id =  req.params.id;
    await Task.findByIdAndUpdate(id,{'name':req.body.name,'description':req.body.description});
    res.redirect('/');
})

router.get('/delete/:id',async (req,res)=>{
    const id =  req.params.id;
    await Task.remove({'_id': id});
    res.redirect('/');
})

router.get('/done/:id',async (req,res)=>{
    const id =  req.params.id;
    const task = await Task.findById(id);
    task.status = 'done';
    await task.save();
    res.redirect('/')
})

router.get('/edit/:id',async (req,res)=>{
    const id =  req.params.id;
    const task =  await Task.findById(id);
    res.render('edit',{'data':task});
})

module.exports = router;