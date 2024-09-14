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
exports.UpdateSportDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sport_dto_1 = require("./create-sport.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateSportDto extends (0, mapped_types_1.PartialType)(create_sport_dto_1.CreateSportDto) {
}
exports.UpdateSportDto = UpdateSportDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the sport',
        example: 'Tennis',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateSportDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the sport',
        example: 'A racket sport played on a grass or hard court.',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateSportDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the sport currently available',
        example: false,
        required: false,
    }),
    __metadata("design:type", Boolean)
], UpdateSportDto.prototype, "isAvailable", void 0);
//# sourceMappingURL=update-sport.dto.js.map