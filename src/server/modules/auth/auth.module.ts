import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './../../libs/orm-entities/user.entity';
import { AuthController } from './application/auth.controller';
import { AuthService } from './domain/auth.service';
import { UsersService } from '../users/domain/users.service';
import { SessionSerializer } from './../../libs/shared/utils/session-serializer';
import { LocalStrategy } from './../../libs/shared/utils/local-strategy';
import { VlidateCustomerMiddleware } from '../../libs/shared/middleware/vlidate-customer.middleware';
import { VlidateCustomerAccountMiddleware } from '../../libs/shared/middleware/vlidate-customer-account.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    { provide: 'AUTH_SERVICE', useClass: AuthService },
    { provide: 'USER_SERVICE', useClass: UsersService },
    LocalStrategy,
    SessionSerializer,
  ],
})
export class AuthModule implements NestModule {
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
