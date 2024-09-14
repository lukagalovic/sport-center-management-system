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
exports.SportsController = void 0;
const common_1 = require("@nestjs/common");
const sports_service_1 = require("./sports.service");
const create_sport_dto_1 = require("./dto/create-sport.dto");
const update_sport_dto_1 = require("./dto/update-sport.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let SportsController = class SportsController {
    constructor(sportsService) {
        this.sportsService = sportsService;
    }
    async create(createSportDto) {
        return await this.sportsService.create(createSportDto);
    }
    async findAll() {
        return await this.sportsService.findAll();
    }
    async findOne(id) {
        const sport = await this.sportsService.findOne(+id);
        if (!sport)
            throw new common_1.NotFoundException(`Sport with ID ${id} not found`);
        return sport;
    }
    async patch(id, updateSportDto) {
        return await this.sportsService.patch(+id, updateSportDto);
    }
    async update(id, updateSportDto) {
        return await this.sportsService.update(+id, updateSportDto);
    }
    async remove(id) {
        await this.sportsService.remove(+id);
    }
};
exports.SportsController = SportsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
        schema: {
            example: {
                message: 'OK',
                statusCode: 200,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        schema: {
            example: {
                message: 'You do not have permission to access this resource',
                error: 'Forbidden',
                statusCode: 403,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal Server Error',
        schema: {
            example: {
                message: 'Internal server error',
                error: 'Internal Server Error',
                statusCode: 500,
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sport_dto_1.CreateSportDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'user'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
        schema: {
            example: {
                message: 'OK',
                statusCode: 200,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        schema: {
            example: {
                message: 'You do not have permission to access this resource',
                error: 'Forbidden',
                statusCode: 403,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal Server Error',
        schema: {
            example: {
                message: 'Internal Server Error',
                error: 'Internal Server Error',
                statusCode: 500,
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'user'),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
        schema: {
            example: {
                message: 'OK',
                statusCode: 200,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        schema: {
            example: {
                message: 'You do not have permission to access this resource',
                error: 'Forbidden',
                statusCode: 403,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not Found',
        schema: {
            example: {
                message: 'Class with ID 1 not found',
                error: 'Not found',
                statusCode: 404,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal Server Error',
        schema: {
            example: {
                message: 'Internal Server Error',
                error: 'Internal Server Error',
                statusCode: 500,
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
        schema: {
            example: {
                message: 'OK',
                statusCode: 200,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        schema: {
            example: {
                message: 'You do not have permission to access this resource',
                error: 'Forbidden',
                statusCode: 403,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not Found',
        schema: {
            example: {
                message: 'Class with ID 1 not found',
                error: 'Not found',
                statusCode: 404,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal Server Error',
        schema: {
            example: {
                message: 'Internal Server Error',
                error: 'Internal Server Error',
                statusCode: 500,
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sport_dto_1.UpdateSportDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "patch", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
        schema: {
            example: {
                message: 'OK',
                statusCode: 200,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        schema: {
            example: {
                message: 'You do not have permission to access this resource',
                error: 'Forbidden',
                statusCode: 403,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not Found',
        schema: {
            example: {
                message: 'Class with ID 1 not found',
                error: 'Not found',
                statusCode: 404,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal Server Error',
        schema: {
            example: {
                message: 'Internal Server Error',
                error: 'Internal Server Error',
                statusCode: 500,
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sport_dto_1.UpdateSportDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'OK',
        schema: {
            example: {
                message: 'OK',
                statusCode: 200,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                message: 'Unauthorized',
                statusCode: 401,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
        schema: {
            example: {
                message: 'You do not have permission to access this resource',
                error: 'Forbidden',
                statusCode: 403,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not Found',
        schema: {
            example: {
                message: 'Class with ID 1 not found',
                error: 'Not found',
                statusCode: 404,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal Server Error',
        schema: {
            example: {
                message: 'Internal Server Error',
                error: 'Internal Server Error',
                statusCode: 500,
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "remove", null);
exports.SportsController = SportsController = __decorate([
    (0, swagger_1.ApiTags)('Sports'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Controller)('sports'),
    __metadata("design:paramtypes", [sports_service_1.SportsService])
], SportsController);
//# sourceMappingURL=sports.controller.js.map