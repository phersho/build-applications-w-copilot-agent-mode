import { Router } from 'express';
const router = Router();
router.get('/', (_req, res) => {
    res.json([
        { id: 1, type: 'run', duration: 30, date: '2026-08-04' },
        { id: 2, type: 'strength', duration: 45, date: '2026-08-03' },
    ]);
});
router.post('/', (req, res) => {
    res.status(201).json({ message: 'Activity logged', data: req.body });
});
export default router;
