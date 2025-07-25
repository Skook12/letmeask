import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { rooms } from './rooms.ts';

export const questions = pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(),
  question: text().notNull().notNull(),
  roomId: uuid().references(() => rooms.id),
  answer: text(),
  createdAt: timestamp().defaultNow().notNull(),
});
