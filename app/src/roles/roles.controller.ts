import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'OK',
    schema: {
      example: {
        message: 'OK',
        statusCode: 200,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    schema: {
      example: {
        message: 'You do not have permission to access this resource',
        error: 'Forbidden',
        statusCode: 403,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        message: 'Internal server error',
        error: 'Internal Server Error',
        statusCode: 500,
      },
    },
  })
  async create(@Body() createRoleDto: CreateRoleDto) {
    return await this.rolesService.create(createRoleDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'OK',
    schema: {
      example: {
        message: 'OK',
        statusCode: 200,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    schema: {
      example: {
        message: 'You do not have permission to access this resource',
        error: 'Forbidden',
        statusCode: 403,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        message: 'Internal Server Error',
        error: 'Internal Server Error',
        statusCode: 500,
      },
    },
  })
  async findAll() {
    return await this.rolesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'OK',
    schema: {
      example: {
        message: 'OK',
        statusCode: 200,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    schema: {
      example: {
        message: 'You do not have permission to access this resource',
        error: 'Forbidden',
        statusCode: 403,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    schema: {
      example: {
        message: 'Class with ID 1 not found',
        error: 'Not found',
        statusCode: 404,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        message: 'Internal Server Error',
        error: 'Internal Server Error',
        statusCode: 500,
      },
    },
  })
  async findOne(@Param('id') id: string) {
    const role = await this.rolesService.findOne(+id);
    if (!role) throw new NotFoundException(`Role with ID ${id} not found`);
    return role;
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'OK',
    schema: {
      example: {
        message: 'OK',
        statusCode: 200,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    schema: {
      example: {
        message: 'You do not have permission to access this resource',
        error: 'Forbidden',
        statusCode: 403,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    schema: {
      example: {
        message: 'Class with ID 1 not found',
        error: 'Not found',
        statusCode: 404,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        message: 'Internal Server Error',
        error: 'Internal Server Error',
        statusCode: 500,
      },
    },
  })
  async patch(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    await this.rolesService.patch(+id, updateRoleDto);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'OK',
    schema: {
      example: {
        message: 'OK',
        statusCode: 200,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    schema: {
      example: {
        message: 'You do not have permission to access this resource',
        error: 'Forbidden',
        statusCode: 403,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    schema: {
      example: {
        message: 'Class with ID 1 not found',
        error: 'Not found',
        statusCode: 404,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        message: 'Internal Server Error',
        error: 'Internal Server Error',
        statusCode: 500,
      },
    },
  })
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    await this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'OK',
    schema: {
      example: {
        message: 'OK',
        statusCode: 200,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    schema: {
      example: {
        message: 'You do not have permission to access this resource',
        error: 'Forbidden',
        statusCode: 403,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
    schema: {
      example: {
        message: 'Class with ID 1 not found',
        error: 'Not found',
        statusCode: 404,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        message: 'Internal Server Error',
        error: 'Internal Server Error',
        statusCode: 500,
      },
    },
  })
  async remove(@Param('id') id: string) {
    await this.rolesService.remove(+id);
  }
}
