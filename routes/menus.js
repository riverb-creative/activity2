//import or require all of the desired frameworks/libraries/resources
const express = require('express');
const router = express.Router();

const menuData = require('../data/menudata');

router.get('/', (req, res) => {
    res.send('Welcome to the menu page!');
})

router.get('/:breakfast', (req, res) => {
    let breakfast = req.params.breakfast;
    res.send('You are viewing our breakfast menu of: ' + breakfast);
});

router.get('/lunch', (req, res) => {
    const lunch = req.query.lunch;
    res.send('Lunch time is here and you are getting: ' + lunch);
});

router.get('/:dinner', (req, res) => {
    let dinner = req.params.dinner;
    res.send('Dinner time! You ordered: ' + dinner);
});

router.get('/:drinks', (req, res) => {
    let drinks = req.params.drinks;
    res.send('Here is the drink you ordered with your food: ' + drinks);
});

router.post("/menuItem/add", (req, res) => {
    //create a new category object (id, name, desc) 
    const newMenuItem = {
        id: menuData.length + 1,
        ...req.body
    }

    //push that object into the end of the array of categories
    menuData.push(newMenuItem);

    //send some sort of success response
    res.status(201)
       .json(newMenuItem);

 });

module.exports = router;