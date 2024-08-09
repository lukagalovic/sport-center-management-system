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
} from '@nestjs/common';
import { SportsService } from './sports.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sports')
@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
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

  @Patch(':id')
  async patchUpdate(
    @Param('id') id: string,
    @Body() updateSportDto: UpdateSportDto,
  ) {
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
