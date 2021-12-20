import { PartialType } from '@nestjs/mapped-types';
import { CreateRolePerformanceDto } from './create-role-performance.dto';

export class UpdateRolePerformanceDto extends PartialType(CreateRolePerformanceDto) {}
