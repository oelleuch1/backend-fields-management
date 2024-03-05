import { IFieldsRepository } from '@domain/interfaces/fields/IFieldsRepository';
import type { ApiResponse, RequestParams } from '@domain/entities/Api';
import { Field } from '@domain/entities/Field';
import { FieldsRepository } from '@infrastructure/repositories/fields/FieldsRepository.spec';

export class FieldsService {
  constructor(
    private readonly repository: FieldsRepository,
  ) {}

  async getAvailableFields(
    params?: RequestParams,
  ): Promise<ApiResponse<Field>> {
    return await this.repository.getAll();
  }
}
