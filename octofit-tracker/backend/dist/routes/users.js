import { Router } from 'express';
const router = Router();
router.get('/', (_req, res) => {
    res.json([
        { id: 1, name: 'Ava', role: 'captain' },
        { id: 2, name: 'Leo', role: 'member' },
    ]);
});
router.post('/', (req, res) => {
    res.status(201).json({ message: 'User created', data: req.body });
});
export default router;
