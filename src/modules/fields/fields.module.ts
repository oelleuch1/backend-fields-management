import { Module } from '@nestjs/common';
import { FieldsController } from './fields.controller';
import { FieldsService } from "@domain/services/fields/FieldsService";

@Module({
  imports: [],
  controllers: [FieldsController],
  providers: [FieldsService],
})

export class FieldsModule {}
