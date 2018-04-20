const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    res.send('')
});

app.listen(5000);