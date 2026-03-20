import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateContactBody } from '../middleware/validateInput';
import { logger } from '../middleware/logger';

export const contactRouter = Router();
const prisma = new PrismaClient();

contactRouter.post('/contact', validateContactBody, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const submission = await prisma.contactSubmission.create({
      data: { name, email, subject, message },
    });
    logger.info({ submissionID: submission.id }, 'New contact submission saved');
    res.status(201).json({ success: true, message: 'Message received' });
  } catch (error) {
    logger.error(error, 'Error saving contact submission');
    res.status(500).json({ error: 'Internal server error' });
  }
});
