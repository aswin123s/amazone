const express = require('express');
const bodyParser = require('body-parser');
const db = require("./database/connector");
const app = express();
const port = 3500;
app.use(bodyParser.json())
app.get('/',(req, res) => {res.send('amazone'); 
});
app.post('/',(req, res) => {console.log(req.body);
});
app.post('/',(req, res) => {console.log(req.body); res.json({status: "executed"})
});
db.authenticate().then(() => {
    console.log("DB AUTHENTICATED");
    require("./database/models/schemainitializer");
}).catch((err) => {
    console.error(err);
})
app.listen(port, () => { console.log(`Server running on ${port}`)
});