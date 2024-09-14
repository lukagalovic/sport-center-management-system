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
exports.ClassesService = void 0;
const common_1 = require("@nestjs/common");
const class_entity_1 = require("./entities/class.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let ClassesService = class ClassesService {
    constructor(classRepository, userRepository, entityManager) {
        this.classRepository = classRepository;
        this.userRepository = userRepository;
        this.entityManager = entityManager;
    }
    async create(createClassDto) {
        const cls = new class_entity_1.Class(createClassDto);
        return await this.userRepository.save(cls);
    }
    async findAll(filter) {
        const query = this.classRepository.createQueryBuilder('class');
        if (filter?.sports) {
            query
                .innerJoinAndSelect('class.sport', 'sport')
                .where('sport.name IN (:...sports)', { sports: filter.sports });
        }
        else {
            query.leftJoinAndSelect('class.sport', 'sport');
        }
        return await query.getMany();
    }
    async findOne(id) {
        return await this.classRepository.findOne({
            where: { id },
            relations: ['sport', 'users'],
        });
    }
    async update(id, updateClassDto) {
        const cls = await this.classRepository.findOneBy({ id });
        if (!cls)
            throw new common_1.NotFoundException(`Class with ID ${id} does not exist.`);
        Object.assign(cls, { ...updateClassDto });
        return await this.userRepository.save(cls);
    }
    async patch(id, updateClassDto) {
        const cls = await this.classRepository.findOneBy({ id });
        if (!cls)
            throw new common_1.NotFoundException(`Class with ID ${id} does not exist.`);
        Object.assign(cls, { ...updateClassDto });
        return await this.userRepository.save(cls);
    }
    async remove(id) {
        const cls = this.classRepository.findOneBy({ id });
        if (!cls)
            throw new common_1.NotFoundException(`Class with ID ${id} does not exist.`);
        const result = await this.classRepository.delete(id);
        if (!result.affected)
            throw new common_1.InternalServerErrorException(`Internal server error.`);
    }
    async applyForClass(classId, userId) {
        return await this.entityManager.transaction(async (entityManager) => {
            const cls = await this.classRepository.findOne({
                where: { id: classId },
                relations: ['users'],
            });
            if (!cls)
                throw new common_1.NotFoundException(`Class with ID ${classId} does not exist.`);
            if (cls.users.some((user) => user.id === userId))
                throw new common_1.ConflictException(`User with ID ${userId} is already applied to this class`);
            const user = await this.userRepository.findOne({
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.InternalServerErrorException(`Internal server error.`);
            }
            cls.users.push(user);
            return await entityManager.save(cls);
        });
    }
};
exports.ClassesService = ClassesService;
exports.ClassesService = ClassesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(class_entity_1.Class)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.EntityManager])
], ClassesService);
//# sourceMappingURL=classes.service.js.map