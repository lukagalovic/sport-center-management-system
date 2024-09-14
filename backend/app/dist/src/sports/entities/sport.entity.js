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
exports.Sport = void 0;
const class_entity_1 = require("../../classes/entities/class.entity");
const abstract_entity_1 = require("../../database/abstract.entity");
const typeorm_1 = require("typeorm");
let Sport = class Sport extends abstract_entity_1.AbstractEntity {
};
exports.Sport = Sport;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sport.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Sport.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Sport.prototype, "isAvailable", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => class_entity_1.Class, (cls) => cls.sport),
    __metadata("design:type", Array)
], Sport.prototype, "classes", void 0);
exports.Sport = Sport = __decorate([
    (0, typeorm_1.Entity)()
], Sport);
//# sourceMappingURL=sport.entity.js.map