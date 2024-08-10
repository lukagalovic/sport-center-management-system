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
@Roles('admin')
@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  async create(@Body() createSportDto: CreateSportDto) {
    return await this.sportsService.create(createSportDto);
  }

  @Roles('admin', 'user')
  @Get()
  async findAll() {
    return await this.sportsService.findAll();
  }

  @Roles('admin', 'user')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const sport = await this.sportsService.findOne(+id);
    if (!sport) throw new NotFoundException(`Sport with ID ${id} not found`);
    return sport;
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() updateSportDto: UpdateSportDto) {
    return await this.sportsService.patch(+id, updateSportDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSportDto: UpdateSportDto,
  ) {
    return await this.sportsService.update(+id, updateSportDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const sport = await this.sportsService.remove(+id);
    if (!sport.affected)
      throw new NotFoundException(`Sport with ID ${id} not found`);
    return sport;
  }
}
