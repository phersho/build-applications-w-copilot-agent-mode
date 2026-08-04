import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json([
    { rank: 1, name: 'Ava', score: 1200 },
    { rank: 2, name: 'Leo', score: 1100 },
  ]);
});

export default router;
