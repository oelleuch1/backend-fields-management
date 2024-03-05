import { IFieldsRepository } from '../../interfaces/fields/IFieldsRepository';
import type { ApiResponse, RequestParams } from "../../entities/Api"
import { Field } from '../../entities/Field';

export class FieldsService {
  constructor(private readonly repository: IFieldsRepository) {}

  getAvailableFields(params?: RequestParams): Promise<ApiResponse<Field>> {
    return this.repository.getAll()
  }
}