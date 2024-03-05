import { RequestParams, ApiResponse } from '@domain/entities/Api';
import { Field } from '@domain/entities/Field';
import { IFieldsRepository } from '@domain/interfaces/fields/IFieldsRepository';


export class FieldsRepository implements IFieldsRepository {
  
  getAll: (params?: RequestParams) => Promise<ApiResponse<Field>>;
  getById: (id: string) => Promise<Field>;
  create: (data: Partial<Field>) => Promise<Field>;
  update: (id: string, data: Partial<Field>) => Promise<Field>;
  delete: (id: string) => Promise<void>;
}
