import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Routes from './Server/route.js'
import Connection from './Database/db.js';

const app = express();




// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);



const PORT = '8080';

Connection();
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));