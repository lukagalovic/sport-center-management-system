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
import { SportsService } from './sports.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('Sports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  @Roles('admin')
  async create(@Body() createSportDto: CreateSportDto) {
    return await this.sportsService.create(createSportDto);
  }

  @Get()
  async findAll() {
    return await this.sportsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const sport = await this.sportsService.findOne(+id);
    if (!sport) throw new NotFoundException(`Sport with ID ${id} not found`);
    return sport;
  }

  @Roles('admin')
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() updateSportDto: UpdateSportDto) {
    return await this.sportsService.patch(+id, updateSportDto);
  }

  @Roles('admin')
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSportDto: UpdateSportDto,
  ) {
    return await this.sportsService.update(+id, updateSportDto);
  }

  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const sport = await this.sportsService.remove(+id);
    if (!sport.affected)
      throw new NotFoundException(`Sport with ID ${id} not found`);
    return sport;
  }
}
