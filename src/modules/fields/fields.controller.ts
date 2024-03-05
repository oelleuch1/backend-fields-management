import { Controller, Get } from '@nestjs/common';
import type { ApiResponse } from '@domain/entities/Api';
import type { Field } from '@domain/entities/Field';
import { FieldsService } from '@domain/services/fields/FieldsService';

@Controller()
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {}

  @Get()
  getAvailableFields(): Promise<ApiResponse<Field>> {
    return this.fieldsService.getAvailableFields();
  }
}
