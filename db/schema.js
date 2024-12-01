import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

export const usersTable = table(
  "users",
  {
    id: t.integer("id").primaryKey({ autoIncrement: true }), // Auto-incrementing primary key for SQLite
    name: t.text("first_name"), // SQLite doesn't need a length specification for text
    // lastName: t.text("last_name"), // Uncomment if needed
    email: t.text("email").notNull(), // Email field (required)
    password: t.text("password").notNull(), // Hashed password (required)
    role: t.text("role").default("guest"), // User role as text
    isActive: t.integer("is_active").default(1), 
    // createdAt: t.integer("created_at").default(sql`strftime('%s', 'now')`), // Current timestamp
    // updatedAt: t.integer("updated_at").default(sql`strftime('%s', 'now')`), // / Active status: 1 for true, 0 for false
  },
  (table) => ({
    emailIndex: t.uniqueIndex("email_idx").on(table.email), // Unique index for email
  })
);

// export const posts = table(
//   "posts",
//   {
//     id: t.integer("id").primaryKey().autoincrement(),
//     slug: t.text("slug").default(t.sql`randomblob(16)`), // Unique slug using random blob
//     title: t.text("title"),
//     ownerId: t.integer("owner_id").references(() => usersTable.id), // Foreign key reference to users
//   },
//   (table) => ({
//     slugIndex: t.uniqueIndex("slug_idx").on(table.slug), // Unique index for slug
//     titleIndex: t.index("title_idx").on(table.title), // Index for title
//   })
// );

// export const comments = table("comments", {
//   id: t.integer("id").primaryKey().autoincrement(),
//   text: t.text("text"),
//   postId: t.integer("post_id").references(() => posts.id), // Foreign key reference to posts
//   ownerId: t.integer("owner_id").references(() => usersTable.id), // Foreign key reference to users
// });
