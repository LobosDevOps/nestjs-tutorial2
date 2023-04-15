import { Module } from '@nestjs/common';
import { CustomersController } from './application/customers.controller';
import { CustomersService } from './domain/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
