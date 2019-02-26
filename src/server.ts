import * as express from 'express';
import port from './port';

const app = express();
app.listen(port, (req, res) => {
  console.log(`server is running at port ${port}`);
});

app.get('/', (req, res) =>
  res.status(200).send(`Hellow friend server is running at port ${port}`),
);
 
