const express = require('express');
const time = require('./middleware/time');
const validadeServiceTime = require('./middleware/validateServiceTime');
const app = express();

app.use(express.json());
app.use(time)


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Server is running on port http://localhost:3001');
});

app.get("/hora", validadeServiceTime, (req, res) => {
    res.send(`data e hora: ${req.time}`);
});