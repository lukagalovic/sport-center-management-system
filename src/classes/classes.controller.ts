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
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('Classes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  async create(@Body() createClassDto: CreateClassDto) {
    return await this.classesService.create(createClassDto);
  }

  @Get()
  async findAll() {
    return await this.classesService.findAll();
  }

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

  // @Post('id/enroll')
  // async enroll(@Param('id') classId: string, @Req() req: Request){
  //   const userId = req.user.sub;
  // }
}
