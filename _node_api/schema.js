// schema.ts
import { mysqlTable, serial, varchar, text } from 'drizzle-orm/mysql2';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).nullable(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password').notNull(),
});
