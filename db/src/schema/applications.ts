import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { conferencesTable } from "./conferences";

export const applicationsTable = pgTable("applications", {
  id: serial("id").primaryKey(),
  conferenceId: integer("conference_id")
    .notNull()
    .references(() => conferencesTable.id, { onDelete: "cascade" }),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  applicantType: text("applicant_type").notNull(),
  school: text("school"),
  message: text("message"),
  status: text("status").notNull().default("submitted"),
  receivedAt: timestamp("received_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
