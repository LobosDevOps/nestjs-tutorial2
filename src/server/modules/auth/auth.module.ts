import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './../../libs/orm-entities/user.entity';
import { AuthController } from './application/auth.controller';
import { AuthService } from './domain/auth.service';
import { UsersService } from '../users/domain/users.service';
import { SessionSerializer } from './../../libs/shared/utils/session-serializer';
import { LocalStrategy } from './../../libs/shared/utils/local-strategy';

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
export class AuthModule {}
