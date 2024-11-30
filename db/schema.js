import { mysqlTable as table } from "drizzle-orm/mysql-core";
import * as t from "drizzle-orm/mysql-core";
import { AnyMySqlColumn } from "drizzle-orm/mysql-core";

export const usersTable = table(
  "users",
  {
    id: t.int().primaryKey().autoincrement(), // Auto-incrementing primary key
    name: t.varchar("first_name", { length: 256 }),
    // lastName: t.varchar("last_name", { length: 256 }),
    email: t.varchar("email", { length: 256 }).notNull(), // Email field (required)
    password: t.varchar("password", { length: 256 }).notNull(), // Hashed password (required)
    role: t.mysqlEnum(["guest", "user", "admin"]).default("guest"), // User role
    isActive: t.boolean("is_active").default(true), // Active status
    createdAt: t.timestamp("created_at").defaultNow(), // Timestamp for account creation
    updatedAt: t.timestamp("updated_at").defaultNow().onUpdateNow(), // Timestamp for account updates
  },
  (table) => {
    return {
      emailIndex: t.uniqueIndex("email_idx").on(table.email), // Unique index for email
    };
  }
);

export const posts = table(
  "posts",
  {
    id: t.int().primaryKey().autoincrement(),
    slug: t.varchar({ length: 256 }).$default(() => generateUniqueString(16)),
    title: t.varchar({ length: 256 }),
    ownerId: t.int("owner_id").references(() => users.id),
  },
  (table) => {
    return {
      slugIndex: t.uniqueIndex("slug_idx").on(table.slug),
      titleIndex: t.index("title_idx").on(table.title),
    };
  }
);

export const comments = table("comments", {
  id: t.int().primaryKey().autoincrement(),
  text: t.varchar({ length: 256 }),
  postId: t.int("post_id").references(() => posts.id),
  ownerId: t.int("owner_id").references(() => users.id),
});
