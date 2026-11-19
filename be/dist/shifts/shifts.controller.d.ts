import { ShiftsService } from "../prisma-api/shifts.service";
import { Prisma } from "../generated/prisma/client";
export declare class ShiftsController {
    private readonly shiftsService;
    constructor(shiftsService: ShiftsService);
    findShiftsForShow(showId: string): Promise<{
        id: number;
        duration: number | null;
        showId: number;
        order: number;
        shiftStarted: Date | null;
        shiftFinished: Date | null;
    }[]>;
    create(data: Prisma.ShiftUncheckedCreateInput): Promise<{
        id: number;
        duration: number | null;
        showId: number;
        order: number;
        shiftStarted: Date | null;
        shiftFinished: Date | null;
    }>;
}
