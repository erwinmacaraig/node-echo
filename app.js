const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {    
    res.status(200).send({
        message: 'API END POINT REACHED'        
    });
    res.end();
});

app.post('/message', (req, res) => {
    if(req.body.conversation_id && req.body.message) {
        conversation_id = req.body.conversation_id;
        message = req.body.message;
        if (message.match(/\bHello\b/) || message.match(/\bHi\b/)){
            res.status(200).send({
                response_id: conversation_id,
                response: 'Welcome to StationFive.'
            });    
        } else if (message.match(/\bGoodbye\b/) || message.match(/\bbye\b/)){
            res.status(200).send({
                response_id: conversation_id,
                response: 'Thank you, see you around.'
            }); 
        } else {
            res.status(200).send({
                response_id: conversation_id,
                response: `Sorry, I don't understand.`
            });
        }        
    } else {
        res.status(400).send({
            message: "Invalid parameter supplied"
        });
    }
    res.end();
});
app.listen(3000, () => {
    console.log('WEB SERVER RUNNING ON PORT 3000');
});


