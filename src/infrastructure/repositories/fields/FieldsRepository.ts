import { RequestParams, ApiResponse } from '@domain/entities/Api';
import { Field } from '@domain/entities/Field';
import { IFieldsRepository } from '@domain/interfaces/fields/IFieldsRepository';
import { BaseRepository } from '../shared/BaseRepository';
import { PrismaService } from '@domain/services/prisma/PrismaService';
export class FieldsRepository
  extends BaseRepository<Field>
  implements IFieldsRepository
{
  constructor(private readonly db: PrismaService) {
    super();
  }

//   async getAll(params?: RequestParams): Promise<ApiResponse<Field>> {
//     const fields = await this.db.field.findMany();
//     return { data: fields };
//   }
}
