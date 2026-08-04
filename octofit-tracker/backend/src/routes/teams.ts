import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json([
    { id: 1, name: 'Velocity', members: 4 },
    { id: 2, name: 'Summit', members: 3 },
  ]);
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Team created', data: req.body });
});

export default router;
