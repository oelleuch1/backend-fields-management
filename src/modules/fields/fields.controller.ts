import { Controller, Get, HttpStatus } from '@nestjs/common';
import type { ApiResponse } from '@domain/entities/Api';
import { Field } from '@domain/entities/Field';
import { FieldsService } from '@domain/services/fields/FieldsService';
import { ApiResponse as ApiResponseSwagger, ApiTags } from '@nestjs/swagger';

@ApiTags('Fields')
@ApiResponseSwagger({
  status: HttpStatus.OK,
  description: 'Success',
  type: Field,
})
@Controller('fields')
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {}

  @Get()
  async getAvailableFields(): Promise<ApiResponse<Field>> {
    return await this.fieldsService.getAvailableFields();
  }
}
