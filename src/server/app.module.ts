import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import * as Entities from './libs/orm-entities';
import { CustomersModule } from './modules/customers/customers.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0000',
      database: 'tutorial_db2',
      entities: Object.values(Entities),
      synchronize: true,
    }),
    AuthModule,
    PassportModule.register({
      session: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
