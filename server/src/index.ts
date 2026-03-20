import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { validateEnv } from './env';
import { globalLimiter } from './middleware/rateLimiter';
import { logger, httpLogger } from './middleware/logger';
import { chatRouter } from './routes/chat';
import { contactRouter } from './routes/contact';
import { dataRouter } from './routes/data';

dotenv.config();
validateEnv(); // crash immediately if env is missing

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 8001;

// --- Security Middleware (order matters) ---
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'", 'http://localhost:8001'],
      },
    },
  })
);

app.use(
  cors({
    origin: [process.env.APP_URL || 'http://localhost:3000', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: false,
  })
);

app.use(express.json({ limit: '10kb' })); // block payload flooding
app.use(httpLogger);
app.use(globalLimiter);

// --- Routes ---
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', chatRouter);
app.use('/api', contactRouter);
app.use('/api', dataRouter);

// --- Seed Data ---
async function seedData() {
  const statsCount = await prisma.stat.count();
  if (statsCount === 0) {
    logger.info('Seeding initial dashboard stats...');
    await prisma.stat.createMany({
      data: [
        { label: 'Total Revenue', value: '$124.5k', trend: '+12.5%' },
        { label: 'Active Projects', value: '14', trend: '+2' },
        { label: 'Client Satisfaction', value: '98%', trend: '+0.5%' },
        { label: 'Resource Load', value: '76%', trend: 'Optimal' },
      ],
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
          dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
        {
          title: 'Quantum Mobile App',
          category: 'Mobile',
          description: 'Cross-platform Flutter app for real-time asset tracking.',
          status: 'ACTIVE',
          progress: 40,
          clientName: 'Quantum logistics',
          dueDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
        },
      ],
    });
  }
}

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
