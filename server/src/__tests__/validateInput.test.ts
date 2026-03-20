import { describe, it, expect } from 'vitest';
import { chatSchema, contactSchema } from '../middleware/validateInput';

describe('chatSchema', () => {
  it('rejects empty messages', () => {
    const result = chatSchema.safeParse({ prompt: '' });
    expect(result.success).toBe(false);
  });

  it('rejects messages over 2000 characters', () => {
    const long = 'a'.repeat(2001);
    const result = chatSchema.safeParse({ prompt: long });
    expect(result.success).toBe(false);
  });

  it('accepts valid messages', () => {
    const result = chatSchema.safeParse({ prompt: 'Hello, how are you?' });
    expect(result.success).toBe(true);
  });

  it('strips HTML tags from input', () => {
    const result = chatSchema.parse({ prompt: '<script>alert(1)</script>hi' });
    expect(result.prompt).toBe('alert(1)hi');
  });

  it('trims whitespace', () => {
    const result = chatSchema.parse({ prompt: '  hello  ' });
    expect(result.prompt).toBe('hello');
  });

  it('rejects missing prompt field', () => {
    const result = chatSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});

describe('contactSchema', () => {
  const validContact = {
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Inquiry',
    message: 'I would like to learn more about your services.',
  };

  it('accepts valid contact submissions', () => {
    const result = contactSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({ ...validContact, email: 'not-an-email' });
    expect(result.success).toBe(false);
  });

  it('rejects short names', () => {
    const result = contactSchema.safeParse({ ...validContact, name: 'A' });
    expect(result.success).toBe(false);
  });

  it('rejects short messages', () => {
    const result = contactSchema.safeParse({ ...validContact, message: 'Hi' });
    expect(result.success).toBe(false);
  });

  it('strips HTML from contact message', () => {
    const result = contactSchema.parse({
      ...validContact,
      message: '<b>Important</b> question about your product',
    });
    expect(result.message).toBe('Important question about your product');
  });
});
