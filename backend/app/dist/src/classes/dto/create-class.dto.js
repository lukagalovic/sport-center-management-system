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
exports.CreateClassDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const sport_entity_1 = require("../../sports/entities/sport.entity");
class CreateClassDto {
}
exports.CreateClassDto = CreateClassDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the class',
        example: 'Advanced Basketball Training',
    }),
    __metadata("design:type", String)
], CreateClassDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A brief description of the class',
        example: 'A high-intensity basketball training session focusing on advanced techniques.',
        required: false,
    }),
    __metadata("design:type", String)
], CreateClassDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The start date of the class',
        example: '2024-09-01',
        type: String,
    }),
    __metadata("design:type", Date)
], CreateClassDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The end date of the class',
        example: '2024-09-01',
        type: String,
    }),
    __metadata("design:type", Date)
], CreateClassDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The week schedule of class',
        example: [
            { day: 'Monday', time: '18:00' },
            { day: 'Friday', time: '15:00' },
        ],
    }),
    __metadata("design:type", Array)
], CreateClassDto.prototype, "schedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The sport that is taught in the class',
        example: '{"id": 1}',
        type: sport_entity_1.Sport,
    }),
    __metadata("design:type", sport_entity_1.Sport)
], CreateClassDto.prototype, "sport", void 0);
//# sourceMappingURL=create-class.dto.js.map