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
exports.ClassesController = void 0;
const common_1 = require("@nestjs/common");
const classes_service_1 = require("./classes.service");
const create_class_dto_1 = require("./dto/create-class.dto");
const update_class_dto_1 = require("./dto/update-class.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let ClassesController = class ClassesController {
    constructor(classesService) {
        this.classesService = classesService;
    }
    async create(createClassDto) {
        return await this.classesService.create(createClassDto);
    }
    async findAll(sports) {
        const filter = sports ? { sports: sports.split(',') } : {};
        return await this.classesService.findAll(filter);
    }
    async findOne(id) {
        const result = await this.classesService.findOne(+id);
        if (!result)
            throw new common_1.NotFoundException(`Class with ID ${id} not found`);
        return result;
    }
    async patch(id, updateClassDto) {
        return await this.classesService.update(+id, updateClassDto);
    }
    async update(id, updateClassDto) {
        return await this.classesService.update(+id, updateClassDto);
    }
    async remove(id) {
        await this.classesService.remove(+id);
    }
    async applyForClass(id, req) {
        return this.classesService.applyForClass(+id, req.user.userId);
    }
};
exports.ClassesController = ClassesController;
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
    __metadata("design:paramtypes", [create_class_dto_1.CreateClassDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin', 'user'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'sports',
        required: false,
        description: 'Comma-separated list of sports to filter by',
        type: String,
        example: 'Football,Basketball',
    }),
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
    __param(0, (0, common_1.Query)('sports')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "findAll", null);
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
], ClassesController.prototype, "findOne", null);
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
    __metadata("design:paramtypes", [String, update_class_dto_1.UpdateClassDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "patch", null);
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
    __metadata("design:paramtypes", [String, update_class_dto_1.UpdateClassDto]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "update", null);
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
], ClassesController.prototype, "remove", null);
__decorate([
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Post)(':id/apply'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: Number,
        description: 'ID of the class to apply for',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
        schema: {
            example: {
                message: 'Created',
                statusCode: 201,
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
        status: 409,
        description: 'Conflict',
        schema: {
            example: {
                message: 'User with ID 2 is already applied to this class',
                error: 'Conflict',
                statusCode: 409,
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
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "applyForClass", null);
exports.ClassesController = ClassesController = __decorate([
    (0, swagger_1.ApiTags)('Classes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Controller)('classes'),
    __metadata("design:paramtypes", [classes_service_1.ClassesService])
], ClassesController);
//# sourceMappingURL=classes.controller.js.map