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
exports.Class = void 0;
const abstract_entity_1 = require("../../database/abstract.entity");
const sport_entity_1 = require("../../sports/entities/sport.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Class = class Class extends abstract_entity_1.AbstractEntity {
    calculateDuration() {
        if (this.startDate && this.endDate) {
            const startDate = new Date(this.startDate);
            const endDate = new Date(this.endDate);
            if (startDate.getTime && endDate.getTime) {
                const diffInMilliseconds = endDate.getTime() - startDate.getTime();
                this.duration = diffInMilliseconds / (1000 * 60 * 60 * 24);
            }
            else {
                throw new Error('Invalid date format');
            }
        }
        else {
            this.duration = 0;
        }
    }
};
exports.Class = Class;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Class.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Class.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Class.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Class.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Class.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Array)
], Class.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sport_entity_1.Sport, (sport) => sport.classes),
    __metadata("design:type", sport_entity_1.Sport)
], Class.prototype, "sport", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.classes),
    __metadata("design:type", Array)
], Class.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Class.prototype, "calculateDuration", null);
exports.Class = Class = __decorate([
    (0, typeorm_1.Entity)()
], Class);
//# sourceMappingURL=class.entity.js.map