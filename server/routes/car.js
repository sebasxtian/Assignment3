let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with the car model

let Car = require('../models/car');
let carController = require('../controller/car')

// read operations
//get route for the car info

router.get('/', carController.displayCarInfo);

// add opertaion
// get route for displaying the add-page -- create operation
router.get('/add', carController.displayAddPage);
// post route for processing the add page --  create operation
router.post('/add', carController.processAddPage);

// edit opertaion
// get route for displaying the edit operation -- update operation
router.get('/edit/:id', carController.displayEditPage);
// post route for processing the edit operation --  update operation
router.post('/edit/:id', carController.processEditPage);

// Delete operation 
// get to perform delete operation -- deletion
router.get('/delete/:id', carController.performDelete);


module.exports=router;