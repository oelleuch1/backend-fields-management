import { Module } from '@nestjs/common';
import { FieldsController } from './fields.controller';
import { FieldsService } from '@domain/services/fields/FieldsService';
import { PrismaService } from '@domain/services/prisma/PrismaService';

@Module({
  imports: [],
  controllers: [FieldsController],
  providers: [FieldsService, PrismaService],
})
export class FieldsModule {}
