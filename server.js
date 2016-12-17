import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import api from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/api', api);

app.listen(port, () => {
  console.info(`==> 😎 Listening on port ${port}`);
});
