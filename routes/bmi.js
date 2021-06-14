const express = require('express');
const router = express.Router();

router.get('/', (_, res)=>{
    const message = [{ status : 'error', error: 'Body Mass Index can\'t calculate without height & weight.' }]
    res.json({ ok: true, message });
});

router.get('/bmi/:kg', (_, res)=>{

    const message = [{ status : 'error', error: 'Body Mass Index can\'t calculate without height.' }]
    res.json({ ok: true, message });

});

router.get('/bmi/:kg/:height', (req, res)=>{
    const { kg } = req.params;
    const { height } = req.params;
    if(Number(kg) && Number(height))
    {
        var mass = height/100;
        var h2 = mass * mass;
        var bmi = kg/h2;
        var f_bmi = Math.floor(bmi);
        var diff  = bmi - f_bmi;
        diff = diff * 10;
        diff = Math.round(diff);
        if (diff == 10){
            f_bmi += 1;
            diff = 0;
        }
        bmi = f_bmi + "." + diff;
        bmi = bmi+"kg/m2";

        const bmiCalc = [{ status : 'success', bmi: bmi }];
        res.json({ ok: true, bmiCalc });
    }
    else{
        const message = [{ status : 'error', error: 'Body Mass Index can\'t calculate on string values.' }]
        res.json({ ok: true, message });
    }
});

module.exports = router;