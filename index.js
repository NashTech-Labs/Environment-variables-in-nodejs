const config =  require('./config.js');
const express =  require('express');
const app =  express();

app.get('/', (req, res) => {
    res.send(`You run the application on ${config.NODE_ENV} environment!!`);
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})
