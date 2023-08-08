const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
const cors=require('cors');

app.use(cors({
    origin: '*'
}));

const dotenv = require('dotenv');
dotenv.config(
    {
        path: './config/.env'
    }
);

const PORT_NUMBER = process.env.PORT_NUMBER;
const initiateDBConnection = require('./config/db');
const codeRouter = require('./routers/codeRouter');
app.use('/code', codeRouter);

app.listen(PORT_NUMBER, async () =>
{
    console.log(`Server started and listening to port ${PORT_NUMBER}.`);
    await initiateDBConnection();
});
