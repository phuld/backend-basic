const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express();

//config template engine;
configViewEngine(app)

//routes
app.use('/', webRoutes)



app.listen(process.env.PORT || 8888, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})