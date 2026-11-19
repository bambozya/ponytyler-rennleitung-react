import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaApiModule } from "../prisma-api/prisma-api.module";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";

@Module({
  imports: [PrismaApiModule, ConfigModule],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
