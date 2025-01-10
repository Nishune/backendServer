import express from 'express';
import fs from 'fs/promises';

const app = express();

//Serva statiska filerna
app.use(express.static('./dist'));

//Serva index.html
app.get('/', async (request, response) => {
  const buf = await fs.readFile('./dist/index.html');
  const html = buf.toString();
  response.send(html);
});

//hantera /about och serva about.html
app.get('/about', async (request, response) => {
  const buf = await fs.readFile('./dist/about.html');
  const html = buf.toString();
  response.send(html);
});

app.get('/kids', async (request, response) => {
  const buf = await fs.readFile('./dist/kids.html');
  const html = buf.toString();
  response.send(html);
});

app.listen(3080, () => {
  console.log('Server running on port 3080');
});
