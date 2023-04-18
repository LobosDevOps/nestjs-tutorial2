import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './../../libs/orm-entities/user.entity';
import { UsersController } from './application/users.controller';
import { UsersService } from './domain/users.service';
import { UsersRepository } from './infrastructure/users.repository';

const doaminServices = [UsersService];
const repositories = [UsersRepository];

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [...doaminServices, ...repositories],
  exports: [
    // TypeOrmModule.forFeature([User]),
    ...doaminServices,
    ...repositories,
  ],
})
export class UsersModule {}
