  import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Patch,
  NotFoundException,
  ConflictException,
  Delete,
} from "@nestjs/common";
import { ShowService } from "../prisma-api/show.service";
import { Show, Prisma } from "../generated/prisma/client";
import { RaceService } from "../prisma-api/race.service";

@Controller("api/show")
export class ShowController {
  constructor(
    private readonly showService: ShowService,
    private readonly raceService: RaceService
  ) {}

  @Get("")
  async getShows(): Promise<Show[]> {
    return this.showService.shows({
      orderBy: { date: { sort: "desc" } },
    });
  }

  @Get("shows")
  async getAllShows(): Promise<Show[]> {
    return this.showService.showsOrderedByActiveAndDate();
  }

  @Get("current-show")
  async getCurrentShow(): Promise<Show> {
    const shows: Show[] = await this.showService.shows({
      orderBy: { date: { sort: "desc" } },
      where: { active: true },
    });
    if (shows.length > 0) {
      return shows[0];
    } else {
      throw new NotFoundException("No current shows");
    }
  }

  @Get("current-shows")
  async getCurrentShows(): Promise<Show[]> {
    return this.showService.shows({
      orderBy: { date: { sort: "desc" } },
      where: { active: true },
    });
  }

  @Get("old-shows")
  async getOldShows(): Promise<Show[]> {
    return this.showService.shows({
      orderBy: { date: { sort: "desc" } },
      where: { active: false },
    });
  }

  @Get(":id")
  async getPostById(@Param("id") id: string): Promise<Show> {
    return this.showService.show({ id: Number(id) });
  }

  @Post("")
  async createShow(@Body() showData: Prisma.ShowCreateInput): Promise<Show> {
    try {
      return await this.showService.createShow({
        ...showData,
        date: showData.date || new Date(),
      });
    } catch (error) {
      throw this.nameConflictOr(error, showData.name);
    }
  }

  @Patch("repair-races-for/:id")
  repairRacesFor(
    @Param("id") id: string
  ) {
    return this.raceService.repairOrder(id);
  }

  @Patch(":id")
  async updateShow(
    @Param("id") id: string,
    @Body() showData: Prisma.ShowUpdateInput,
  ): Promise<Show> {
    try {
      return await this.showService.updateShow({
        data: showData,
        where: { id: Number(id) },
      });
    } catch (error) {
      throw this.nameConflictOr(error, showData.name);
    }
  }

  /** Show names are unique; turn the database error into a readable 409. */
  private nameConflictOr(error: unknown, name: unknown) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return new ConflictException(
        `A show named "${name}" already exists. Please choose a different name.`,
      );
    }
    return error;
  }

  @Delete(":id")
  async deleteShowById(@Param("id") id: string): Promise<any> {
    return this.showService.deleteShowWithRacesAndShifts(id);
  }
}
