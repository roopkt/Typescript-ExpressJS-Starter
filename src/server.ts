import * as express from 'express';

const port = 4345;
const app = express();
app.listen(port, (req, res) => {
  console.log(`server is running at port ${port}`);
});

app.get('/', (req, res) =>
  res.send(`Hellow friend server is running at port ${port}`),
);
