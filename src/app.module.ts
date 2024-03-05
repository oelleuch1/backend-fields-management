import { Module } from '@nestjs/common';
import { FieldsModule } from './modules/fields/fields.module';

@Module({
  imports: [
    FieldsModule
  ],
})
export class AppModule {}
