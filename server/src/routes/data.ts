import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { logger } from '../middleware/logger';

export const dataRouter = Router();
const prisma = new PrismaClient();

// GET Dashboard Stats
dataRouter.get('/stats', async (_req, res) => {
  try {
    const stats = await prisma.stat.findMany();
    res.json(stats);
  } catch (error) {
    logger.error(error, 'Error fetching stats');
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET Projects
dataRouter.get('/projects', async (_req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { updatedAt: 'desc' },
    });
    res.json(projects);
  } catch (error) {
    logger.error(error, 'Error fetching projects');
    res.status(500).json({ error: 'Internal server error' });
  }
});
