import path from "node:path";
import { defineConfig } from "prisma/config";

// The SQLite file lives next to the schema. An absolute path keeps the CLI independent of the
// directory it is started from.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  typedSql: { path: "prisma/sql" },
  datasource: {
    url: `file:${path.join(__dirname, "prisma", "rl.db")}`,
  },
});
