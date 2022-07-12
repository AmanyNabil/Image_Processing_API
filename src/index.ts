import express from 'express';
//import routes from './routes/index';
import images from './routes/images';

const app = express();
const port = 3000;

app.get('/api', (req: express.Request, res: express.Response) => {
  //console.log('Access Root server');
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  res.status(200).end(
    `<html>
          <head>
          <title>Image Processing API</title>
          </head>
          <body>
          <h1>Image Processing API</h1>
          <h4>the project API</h4>
          </body>
          </html>`
  );
});

app.get('/', (req: express.Request, res: express.Response) => {
  //console.log('Access Root server');
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  res.status(404).end(
    `<html>
          <head>
          <title>Image Processing API</title>
          </head>
          <body>
          <h1>Image Processing API</h1>
          <h4>Not Found</h4>
          </body>
          </html>`
  );
});

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`);
});

app.use('/api/images', images);

export default app;
