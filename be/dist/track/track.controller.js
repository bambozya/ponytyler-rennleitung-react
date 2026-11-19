"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const track_service_1 = require("./track.service");
let TrackController = class TrackController {
    constructor(trackService) {
        this.trackService = trackService;
    }
    state() {
        return this.trackService.state;
    }
    stream() {
        return this.trackService.stream.pipe((0, rxjs_1.map)((state) => ({ data: state })));
    }
    start(body) {
        const raceId = Number(body?.raceId);
        if (!Number.isInteger(raceId)) {
            throw new common_1.BadRequestException("raceId is missing");
        }
        return this.trackService.start(raceId);
    }
    stop() {
        return this.trackService.stop();
    }
};
exports.TrackController = TrackController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TrackController.prototype, "state", null);
__decorate([
    (0, common_1.Sse)("stream"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], TrackController.prototype, "stream", null);
__decorate([
    (0, common_1.Post)("start"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "start", null);
__decorate([
    (0, common_1.Post)("stop"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TrackController.prototype, "stop", null);
exports.TrackController = TrackController = __decorate([
    (0, common_1.Controller)("api/track"),
    __metadata("design:paramtypes", [track_service_1.TrackService])
], TrackController);
//# sourceMappingURL=track.controller.js.map