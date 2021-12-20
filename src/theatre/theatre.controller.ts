import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheatreService } from './theatre.service';
import { CreateTheatreDto } from './dto/create-theatre.dto';
import { UpdateTheatreDto } from './dto/update-theatre.dto';
import {AddPerformanceDto} from "./dto/add-performance.dto";
import {AddAdministratorDto} from "./dto/add-administrator.dto";

@Controller('theatre')
export class TheatreController {
  constructor(private readonly theatreService: TheatreService) {}

  @Post()
  create(@Body() createTheatreDto: CreateTheatreDto) {
    return this.theatreService.create(createTheatreDto);
  }

  @Post('/performance')
  addPerformance(@Body() addPerformanceDto: AddPerformanceDto) {
    return this.theatreService.addPerformance(addPerformanceDto);
  }

  @Post('/admin')
  addAdministrator(@Body() addAdminDto: AddAdministratorDto) {
    return this.theatreService.addAdministratorToTheatre(addAdminDto);
  }

  @Get()
  findAll() {
    return this.theatreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theatreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheatreDto: UpdateTheatreDto) {
    return this.theatreService.update(+id, updateTheatreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theatreService.remove(+id);
  }
}
