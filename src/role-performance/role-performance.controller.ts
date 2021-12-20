import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {RolePerformanceService} from './role-performance.service';
import {CreateRolePerformanceDto} from './dto/create-role-performance.dto';
import {UpdateRolePerformanceDto} from './dto/update-role-performance.dto';
import {AddActorPerformanceDto} from "./dto/add-actor-performance.dto";

@Controller('role-performance')
export class RolePerformanceController {
    constructor(private readonly rolePerformanceService: RolePerformanceService) {
    }

    @Post()
    create(@Body() createRolePerformanceDto: CreateRolePerformanceDto) {
        return this.rolePerformanceService.create(createRolePerformanceDto);
    }

    @Post('/actor')
    addActor(@Body() addActorPerformanceDto: AddActorPerformanceDto) {
        return this.rolePerformanceService.addActorsToRolePerformance(addActorPerformanceDto);
    }

    @Get()
    findAll() {
        return this.rolePerformanceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.rolePerformanceService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRolePerformanceDto: UpdateRolePerformanceDto) {
        return this.rolePerformanceService.update(+id, updateRolePerformanceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.rolePerformanceService.remove(+id);
    }
}
