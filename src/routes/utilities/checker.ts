import express from 'express';
import fs from 'fs';

const checkThumb = (
  req: express.Request,
  res: express.Response,
  next: () => void
) => {
  if (!(req.query.filename && req.query.width && req.query.height)) {
    res.status(404).end(`query string not valid`);
  } else {
    try {
      if (!fs.existsSync(`./thumbs`)) {
        fs.mkdir(`./thumbs`, { recursive: true }, (err) => {
          if (err) throw new Error(`error mkdir thumbs ${err}`);
        });
      }
      const path = `./thumbs/${req.query.filename}_w${req.query.width}_h${req.query.height}.jpg`;
      if (fs.existsSync(path)) {
        fs.readFile(path, 'binary', (err, img) => {
          if (err) {
            console.error(err);
            throw new Error(`error in read file from middleware`);
          } else {
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.status(200).end(img, 'binary');
          }
        });
      } else {
        next();
      }
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.status(404).end(`${err}`);
    }
  }
};

export default checkThumb;
