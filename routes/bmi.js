const express = require('express');
const router = express.Router();


const users = [{name: 'Tony', email: 'tony@gmail.com'}]

router.get('/', (_, res)=>{
    const message = [{ status : 'error', error: 'Body Mass Index can\'t calculate without height & weight.' }]
    res.json({ ok: true, message });
});

router.get('/bmi/:kg', (_, res)=>{

    const message = [{ status : 'error', error: 'Body Mass Index can\'t calculate without height.' }]
    res.json({ ok: true, message });

});


router.get('/bmi/:kg/:height', (req, res)=>{
   
    
});

module.exports = router;