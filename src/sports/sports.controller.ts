import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SportsService } from './sports.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { PatchUpdateSportDto } from './dto/patch-update-sport.dto';

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
    return await this.sportsService.findOne(+id);
  }

  @Patch(':id')
  async patchUpdate(
    @Param('id') id: string,
    @Body() patchUpdateSportDto: PatchUpdateSportDto,
  ) {
    return await this.sportsService.patchUpdate(+id, patchUpdateSportDto);
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
    return await this.sportsService.remove(+id);
  }
}
