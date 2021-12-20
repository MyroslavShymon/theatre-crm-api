import { PartialType } from '@nestjs/mapped-types';
import { CreateTheatreDto } from './create-theatre.dto';

export class UpdateTheatreDto extends PartialType(CreateTheatreDto) {}
