import { join } from "node:path";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../generated/prisma/client";

/** The SQLite file, resolved from this file so it does not depend on the working directory. */
export const databaseFile = join(__dirname, "..", "..", "prisma", "rl.db");

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      adapter: new PrismaLibSql(
        { url: `file:${databaseFile}` },
        // Dates stay milliseconds since epoch, the format of all existing rows.
        { timestampFormat: "unixepoch-ms" },
      ),
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
