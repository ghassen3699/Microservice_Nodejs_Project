import express, { Response, NextFunction } from 'express';

const router = express.Router();

router.get('/catalog', (req, res: Response, next: NextFunction) => {
    res.status(200).json();
});

export default router;