import { Request, Response } from 'express';
import EventLog from '../models/EventLog';

export const getLogs = async (req: Request, res: Response) => {
  try {
    const logs = await EventLog.find();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve logs' });
  }
};
