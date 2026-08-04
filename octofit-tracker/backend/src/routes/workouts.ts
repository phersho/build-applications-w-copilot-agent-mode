import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json([
    { id: 1, title: 'Morning Mobility', difficulty: 'easy' },
    { id: 2, title: 'HIIT Circuit', difficulty: 'moderate' },
  ]);
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Workout suggestion created', data: req.body });
});

export default router;
