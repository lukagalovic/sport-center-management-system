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
exports.SportsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const sport_entity_1 = require("./entities/sport.entity");
const typeorm_2 = require("@nestjs/typeorm");
let SportsService = class SportsService {
    constructor(sportsRepository) {
        this.sportsRepository = sportsRepository;
    }
    async create(createSportDto) {
        const sport = new sport_entity_1.Sport(createSportDto);
        return await this.sportsRepository.save(sport);
    }
    async findAll() {
        return await this.sportsRepository.find();
    }
    async findOne(id) {
        return await this.sportsRepository.findOneBy({ id });
    }
    async update(id, updateSportDto) {
        const sport = await this.sportsRepository.findOneBy({ id });
        if (!sport)
            throw new common_1.NotFoundException(`Sport with ID ${id} does not exist.`);
        Object.assign(sport, { ...updateSportDto });
        return await this.sportsRepository.save(sport);
    }
    async patch(id, updateSportDto) {
        const sport = await this.sportsRepository.findOneBy({ id });
        if (!sport)
            throw new common_1.NotFoundException(`Sport with ID ${id} does not exist.`);
        Object.assign(sport, { ...updateSportDto });
        return await this.sportsRepository.save(sport);
    }
    async remove(id) {
        const sport = this.sportsRepository.findOneBy({ id });
        if (!sport)
            throw new common_1.NotFoundException(`Sport with ID ${id} does not exist.`);
        const result = await this.sportsRepository.delete(id);
        if (!result.affected)
            throw new common_1.InternalServerErrorException(`Internal server error.`);
    }
};
exports.SportsService = SportsService;
exports.SportsService = SportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(sport_entity_1.Sport)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SportsService);
//# sourceMappingURL=sports.service.js.map