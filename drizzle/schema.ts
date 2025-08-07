import { pgTable, uuid, varchar, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const blogs = pgTable("blogs", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: varchar({ length: 80 }).notNull(),
	body: text().notNull(),
	orgId: text().notNull(),
});
