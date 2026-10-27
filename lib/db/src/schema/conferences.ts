import { createInsertSchema } from "drizzle-zod";
import {
  boolean,
  date,
  doublePrecision,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const conferencesTable = pgTable(
  "conferences",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    level: text("level").notNull(),
    city: text("city").notNull(),
    region: text("region").notNull(),
    venue: text("venue"),
    startDate: date("start_date", { mode: "string" }).notNull(),
    endDate: date("end_date", { mode: "string" }).notNull(),
    applicationDeadline: date("application_deadline", { mode: "string" }),
    theme: text("theme"),
    description: text("description"),
    fee: doublePrecision("fee"),
    status: text("status").notNull().default("draft"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex("conferences_slug_unique").on(table.slug)],
);

export const committeesTable = pgTable("committees", {
  id: serial("id").primaryKey(),
  conferenceId: integer("conference_id")
    .notNull()
    .references(() => conferencesTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  topic: text("topic"),
  description: text("description"),
  chair: text("chair"),
  studyGuideUrl: text("study_guide_url"),
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertConferenceSchema = createInsertSchema(conferencesTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertConference = z.infer<typeof insertConferenceSchema>;
export type Conference = typeof conferencesTable.$inferSelect;
export type Committee = typeof committeesTable.$inferSelect;
