import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class Field {
  @ApiProperty({ description: 'The id of the field' })
  @IsString()
  @IsNotEmpty()
  id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  label: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  location: FieldLocation;
  // ....
}

export interface FieldLocation {
  id: string;
  longitude: number;
  latitude: number;
}
