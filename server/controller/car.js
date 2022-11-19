let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect with book model
let Car = require('../models/car');

module.exports.displayCarInfo = (req,res,next)=>{
    Car.find((err, carinfo)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('car/list',{
                title:'Cars',
                CarInfo: carinfo
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('car/add',{title:'Add Car'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newCar = Car ({
        "model":req.body.model,
        "year":req.body.year,
        "zeroSixty":req.body.zeroSixty,
        "topSpeed":req.body.topSpeed,
        "description":req.body.description,
        "price":req.body.price
    });
    Car.create(newCar,(err,Car) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/car-info');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Car.findById(id,(err, carToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('car/edit',{title:'Edit Car', car:carToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updateCar = Car({
        "_id":id,
        "model":req.body.model,
        "year":req.body.year,
        "zeroSixty":req.body.zeroSixty,
        "topSpeed":req.body.topSpeed,
        "description":req.body.description,
        "price":req.body.price
    });
    Car.updateOne({_id:id},updateCar,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/car-info');
        }
    });
}

module.exports.performDelete = (req,res,next)=> {
    let id = req.params.id;
    Car.deleteOne({_id:id},(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/car-info');
        }
    });
}