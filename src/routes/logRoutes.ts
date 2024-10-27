import express from 'express';
import { getLogs } from '../controllers/logController';

const router = express.Router();

router.get('/', getLogs);

export default router;
