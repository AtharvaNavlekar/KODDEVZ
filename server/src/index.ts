import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import pino from 'pino';

dotenv.config();

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
});

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 8001;

app.use(helmet());
app.use(cors());
app.use(express.json());

// --- Zod Schemas ---
const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10)
});

// --- Seed Data Helper ---
async function seedData() {
  const statsCount = await prisma.stat.count();
  if (statsCount === 0) {
    logger.info('Seeding initial dashboard stats...');
    await prisma.stat.createMany({
      data: [
        { label: 'Total Revenue', value: '$124.5k', trend: '+12.5%' },
        { label: 'Active Projects', value: '14', trend: '+2' },
        { label: 'Client Satisfaction', value: '98%', trend: '+0.5%' },
        { label: 'Resource Load', value: '76%', trend: 'Optimal' }
      ]
    });
  }

  const projectCount = await prisma.project.count();
  if (projectCount === 0) {
    logger.info('Seeding initial projects...');
    await prisma.project.createMany({
      data: [
        {
          title: 'Nexus Platform Redesign',
          category: 'Web App',
          description: 'Full enterprise portal rewrite using Next.js and Tailwind.',
          status: 'ACTIVE',
          progress: 65,
          clientName: 'Nexus Corp',
          dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        },
        {
          title: 'Quantum Mobile App',
          category: 'Mobile',
          description: 'Cross-platform Flutter app for real-time asset tracking.',
          status: 'ACTIVE',
          progress: 40,
          clientName: 'Quantum logistics',
          dueDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000)
        }
      ]
    });
  }
}

// --- Routes ---

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// GET Dashboard Stats
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await prisma.stat.findMany();
    res.json(stats);
  } catch (error) {
    logger.error(error, 'Error fetching stats');
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET Projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { updatedAt: 'desc' }
    });
    res.json(projects);
  } catch (error) {
    logger.error(error, 'Error fetching projects');
    res.status(500).json({ error: 'Internal server error' });
  }
});

type ContactInput = z.infer<typeof ContactSchema>;

// POST Contact Submission
app.post('/api/contact', async (req, res) => {
  try {
    const validatedData = ContactSchema.parse(req.body);
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      }
    });
    logger.info({ submissionID: submission.id }, 'New contact submission saved');
    res.status(201).json({ success: true, message: 'Message received' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation failed', details: error.errors });
    }
    logger.error(error, 'Error saving contact submission');
    res.status(500).json({ error: 'Internal server error' });
  }
});

// --- Server Start ---
async function main() {
  try {
    await prisma.$connect();
    logger.info('Database connected successfully');
    
    await seedData();
    
    app.listen(port, () => {
      logger.info(`KODDEVZ API running at http://localhost:${port}`);
    });
  } catch (error) {
    logger.error(error, 'Failed to start server');
    process.exit(1);
  }
}

main();
