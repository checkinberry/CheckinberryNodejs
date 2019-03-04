const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/', async (req, res) =>{

    const users = await user.find();
    res.json(users);
});

router.post('/', async (req, res)=>{
    const { name, mac } = req.body;
    const usersaved = new user({name, mac});

    var encontrado = false;
    const alluser = await user.find();

    for(i = 0; i<alluser.length; i++){
        if(usersaved.mac == alluser[i].mac){
            encontrado = true;
            break;
        }
    }

    if(!encontrado){
        await usersaved.save();
        res.json({status: 'user saved'});
    }
    else{
        res.json({status: 'the user is already registered'});
    }
});

router.put('/:id', async (req, res) => {
    const { name, mac } = req.body;
    const updateUser = {name, mac};
    await user.findByIdAndUpdate(req.params.id, updateUser)
    res.json({status: 'updated user'});
});

router.delete('/:id', async (req, res) => {

    await user.findByIdAndRemove(req.params.id)
    res.json({status: 'User Deleted'});
});

router.get('/:mac', async (req, res) =>{

    const userByMac = await user.find({ mac: {$eq: req.params.mac}});
    if(userByMac.length == 0){

        res.json({status: 'there are no registered users with that mac'});
    }
    else{
        res.json(userByMac);
    }
});

module.exports = router;