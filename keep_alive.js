const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req, res) =>res.send('I am Alivee') )

app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));