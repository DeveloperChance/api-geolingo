const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./services/DatabaseService');
const configBase = require('./config/BaseConfig');
const app = express();
const port = configBase.port || 8080;

app.options('*', cors());
app.listen(port, () => console.log(`API Version: ${configBase.version}\nPort: ${port}`));
if (configBase.state === "dev") app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cors());

// Index
app.get('/', (req, res) => res.status(200).json({
    status: 200,
    api_version: configBase.version,
    app: configBase.app_name
}));

app.get('/db', async (req, res) =>{
    let content;
    try{
        content = await db.testRecord('*', 'geolingo', 'test', 'active', 1)
    }catch{
        return res.status(500).json({ status: 500, api_version: configBase.version, error: "Server Error Occured"});
    };

    console.log(content);
    return res.status(200).send({ status: 200, api_version: configBase.version });
});