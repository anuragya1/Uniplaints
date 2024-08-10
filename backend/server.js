import express from 'express';
import cors from 'cors';
import router from './Routes.js';

const app = express();
const port = 3001;

app.use(cors());
app.use('/', router);

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`);
});

export default app;
