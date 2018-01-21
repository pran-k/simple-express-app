const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');

app.get('/hello', (req, res) => res.send('World!'));

app.get('/delay/:seconds', (req, res) => {
    let delay = 0;
    try {
        delay = parseInt(req.params.seconds);
    } catch(e) {
        console.log(`Error parsing seconds parameter with value ${seconds}`);
    }
    let respond = () => res.send({
        delay: `${delay} second(s)`
    });
    setTimeout(respond, delay * 1000);
});

app.listen(app.get('port'), () => {
    console.log(`simple-express-app running on port ${app.get('port')}`);
})