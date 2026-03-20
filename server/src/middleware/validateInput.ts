import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const chatSchema = z.object({
  prompt: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(2000, 'Message too long — maximum 2000 characters')
    .trim()
    // Strip any HTML tags from input
    .transform((s) => s.replace(/<[^>]*>/g, '')),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message too long — maximum 5000 characters')
    .trim()
    .transform((s) => s.replace(/<[^>]*>/g, '')),
});

export function validateChatBody(req: Request, res: Response, next: NextFunction) {
  const result = chatSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: result.error.issues[0]?.message ?? 'Invalid input' });
    return;
  }
  req.body = result.data;
  next();
}

export function validateContactBody(req: Request, res: Response, next: NextFunction) {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: result.error.issues[0]?.message ?? 'Invalid input' });
    return;
  }
  req.body = result.data;
  next();
}
