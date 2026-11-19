// The API's JSON shapes come straight from the backend, which derives them from the Prisma schema.
// Type-only, so nothing of the backend ends up in the bundle. Needs `npx prisma generate --sql` in be/.
export type * from "../../../../be/src/api-types";
