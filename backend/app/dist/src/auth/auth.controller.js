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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const login_user_dto_1 = require("./dto/login-user.dto");
const register_user_dto_1 = require("./dto/register-user.dto");
const swagger_1 = require("@nestjs/swagger");
const local_guard_1 = require("./guards/local.guard");
const user_entity_1 = require("../users/entities/user.entity");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerUserDto) {
        return await this.authService.register(registerUserDto);
    }
    async login(loginUserDto) {
        const user = new user_entity_1.User(await this.authService.validateUser(loginUserDto));
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials');
        return await this.authService.login(user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
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
        status: 409,
        description: 'Conflict',
        schema: {
            example: {
                message: 'A user with the same username or email already exists.',
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
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_guard_1.LocalGuard),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
        schema: {
            example: {
                message: 'Bearer token',
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
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map