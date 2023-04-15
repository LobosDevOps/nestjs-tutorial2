import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CustomersController } from './application/customers.controller';
import { CustomersService } from './domain/customers.service';
import { VlidateCustomerMiddleware } from '../../libs/shared/middleware/vlidate-customer.middleware';
import { VlidateCustomerAccountMiddleware } from '../../libs/shared/middleware/vlidate-customer-account.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VlidateCustomerMiddleware, VlidateCustomerAccountMiddleware)
      .forRoutes(
        '*',
        //   {
        //   path: 'customers/:id',
        //   method: RequestMethod.GET,
        // }
      );
  }
}
