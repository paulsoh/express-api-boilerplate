import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Express API server boilerplate');
});

export default router;
