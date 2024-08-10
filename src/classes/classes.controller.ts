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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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
  async create(@Body() createClassDto: CreateClassDto) {
    return await this.classesService.create(createClassDto);
  }

  @Roles('admin', 'user')
  @Get()
  async findAll(@Query('sports') sports?: string) {
    const filter = sports ? { sports: sports.split(',') } : {};
    return await this.classesService.findAll(filter);
  }

  @Roles('admin', 'user')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.classesService.findOne(+id);
    if (!result) throw new NotFoundException(`Class with ID ${id} not found`);
    return result;
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return await this.classesService.update(+id, updateClassDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassDto: UpdateClassDto,
  ) {
    return await this.classesService.update(+id, updateClassDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.classesService.remove(+id);
    if (!result.affected)
      throw new NotFoundException(`Class with ID ${id} not found`);
    return result;
  }

  @Roles('user')
  @Post(':id/apply')
  async applyForClass(
    @Param('id') id: number,
    @Req() req: GetUserAuthInfoRequest,
  ) {
    const userId = req.user.id;
    return await this.classesService.applyForClass(+id, userId);
  }
}
