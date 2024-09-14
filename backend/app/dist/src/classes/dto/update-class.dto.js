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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_class_dto_1 = require("./create-class.dto");
const sport_entity_1 = require("../../sports/entities/sport.entity");
class UpdateClassDto extends (0, swagger_1.PartialType)(create_class_dto_1.CreateClassDto) {
}
exports.UpdateClassDto = UpdateClassDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the class',
        example: 'Beginner Basketball Training',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A brief description of the class',
        example: 'A training session for beginners with a focus on basic skills.',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateClassDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the class is currently available',
        example: false,
    }),
    __metadata("design:type", Boolean)
], UpdateClassDto.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The start date of the class',
        example: '2024-10-01',
        type: String,
    }),
    __metadata("design:type", Date)
], UpdateClassDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The end date of the class',
        example: '2024-10-01',
        type: String,
        required: false,
    }),
    __metadata("design:type", Date)
], UpdateClassDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The week schedule of class',
        example: [
            { day: 'Monday', time: '18:00' },
            { day: 'Friday', time: '15:00' },
        ],
    }),
    __metadata("design:type", Array)
], UpdateClassDto.prototype, "schedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The sport associated with the class',
        type: sport_entity_1.Sport,
        example: '{"id": 1}',
        required: true,
    }),
    __metadata("design:type", sport_entity_1.Sport)
], UpdateClassDto.prototype, "sport", void 0);
//# sourceMappingURL=update-class.dto.js.map