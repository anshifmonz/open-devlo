import express from 'express';
import flash from 'express-flash';
import bodyParser from 'body-parser';
import 'dotenv/config';

import './services/cronJobs.js';
import passportConfig from './config/passportConfig.js';
import Routes from './routes/routes.js';
import sessionConfig from './config/sessionConfig.js';

const app = express();
const PORT = process.env.PORT;

app.use(sessionConfig);
passportConfig(app);

app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', Routes);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on http://localhost:${PORT}`);
})
