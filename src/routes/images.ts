import express from 'express';
import checker from './utilities/checker';
import fs from 'fs';
import resizeImage from '../modules/image';

const images = express.Router();

images.get(
  '/',
  checker,
  (req: express.Request, res: express.Response): void => {
    resizeImage(req.query.filename, req.query.width, req.query.height)
      .then((path) => {
        if (fs.existsSync(path)) {
          try {
            fs.readFile(path, 'binary', (err, img) => {
              if (err) {
                throw new Error(`${err}`);
              } else {
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                res.status(200).end(img, 'binary');
              }
            });
          } catch (err) {
            throw new Error(`Error in reading file ${err}`);
          }
        } else {
          throw new Error('this path not found from end point ');
        }
      })
      .catch((err) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.status(404).end(
          `<html>
          <head>
          <title>Image Processing API</title>
          </head>
          <body>
          <h1>Image Processing API</h1>
          <h4>this is sample project</h4>
          <h5>${err}</h5>
          </body>
          </html>`
        );
      });
  }
);

export default images;
