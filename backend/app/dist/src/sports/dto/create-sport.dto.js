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
exports.CreateSportDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSportDto {
}
exports.CreateSportDto = CreateSportDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the sport',
        example: 'Football',
    }),
    __metadata("design:type", String)
], CreateSportDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the sport',
        example: 'The sport that is played with 11 players on each side',
    }),
    __metadata("design:type", String)
], CreateSportDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is currently sport available ',
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreateSportDto.prototype, "isAvailable", void 0);
//# sourceMappingURL=create-sport.dto.js.map