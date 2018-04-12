
import path from 'path';
import express from 'express';
import models from './models';
import {Records} from './models';
import getAllREcords from './controllers/getAllRecords';
import insertRecord from './controllers/insertRecord';
import bodyParser from 'body-parser';

//Sync Database
models.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

//app.use(express.static(path.join(__dirname, 'public')));

//console.log(path.join(__dirname, 'public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(publicPath);


app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/records', getAllREcords);

app.post('/records', insertRecord);

app.get('*', (req, res) => {
    res.sendFile(indexPath);
});

export default app;
