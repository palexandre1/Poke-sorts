import express from 'express';
import path from 'path';
import homepageRouter from './homepageRouter.js';

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(path.resolve(), 'public');

app.use(express.json());
app.use('/', express.static(publicPath));
app.use(homepageRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
