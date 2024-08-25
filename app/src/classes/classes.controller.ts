import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  NotFoundException,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { GetUserAuthInfoRequest } from 'src/shared/GetUserAuthInfoRequest';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('Classes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

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
  async create(@Body() createClassDto: CreateClassDto) {
    return await this.classesService.create(createClassDto);
  }

  @Roles('admin', 'user')
  @Get()
  @ApiQuery({
    name: 'sports',
    required: false,
    description: 'Comma-separated list of sports to filter by',
    type: String,
    example: 'Football,Basketball',
  })
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
  async findAll(@Query('sports') sports?: string) {
    const filter = sports ? { sports: sports.split(',') } : {};
    return await this.classesService.findAll(filter);
  }

  @Roles('admin', 'user')
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
    const result = await this.classesService.findOne(+id);
    if (!result) throw new NotFoundException(`Class with ID ${id} not found`);
    return result;
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
  async patch(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return await this.classesService.update(+id, updateClassDto);
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
  async update(
    @Param('id') id: string,
    @Body() updateClassDto: UpdateClassDto,
  ) {
    return await this.classesService.update(+id, updateClassDto);
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
    await this.classesService.remove(+id);
  }

  @Roles('user')
  @Post(':id/apply')
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the class to apply for',
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
    schema: {
      example: {
        message: 'Created',
        statusCode: 201,
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
    status: 409,
    description: 'Conflict',
    schema: {
      example: {
        message: 'User with ID 2 is already applied to this class',
        error: 'Conflict',
        statusCode: 409,
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
  async applyForClass(
    @Param('id') id: number,
    @Req() req: GetUserAuthInfoRequest,
  ) {
    return this.classesService.applyForClass(+id, req.user.userId);
  }
}
