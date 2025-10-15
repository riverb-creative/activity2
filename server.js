/**
 * Activity 2
 * River
 * 10/13/2025
 */

//import desire frameworks
    const express = require('express');
    const app = express();

//
    app.use(express.json());
    const menuRoutes = require('./routes/menus');

//set listening PORT
    const PORT = 3000;

//
    app.use('/menus', menuRoutes);

//
    app.get('/', (req, res) => {
        res.send('<h1>Welcome to the app specifically for food cart owners!</h1>');
    });

//
    app.listen(PORT, () => {
        console.log("Web server connecting to", PORT);
    });
