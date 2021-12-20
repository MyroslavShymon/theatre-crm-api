import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerformancesService } from './performances.service';
import { CreatePerformanceDto } from './dto/create-performance.dto';
import { UpdatePerformanceDto } from './dto/update-performance.dto';

@Controller('performance')
export class PerformancesController {
  constructor(private readonly performancesService: PerformancesService) {}

  @Post()
  create(@Body() createPerformanceDto: CreatePerformanceDto) {
    return this.performancesService.create(createPerformanceDto);
  }

  @Get()
  findAll() {
    return this.performancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performancesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerformanceDto: UpdatePerformanceDto) {
    return this.performancesService.update(+id, updatePerformanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.performancesService.remove(+id);
  }
}
