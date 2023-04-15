import { Inject, Injectable } from '@nestjs/common';

import { UsersService } from '../../users/domain/users.service';
import { comparePassword } from '../../../libs/shared/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUser(usename: string, password: string) {
    const userDb = await this.userService.findUserByUsername(usename);

    if (userDb) {
      const matched = comparePassword(password, userDb.password);
      if (matched) {
        console.log('User Validation Success!');
        return userDb;
      } else {
        console.log('Password do not match!');
        return null;
      }
    }
    console.log('User Validation Failed!');
    return null;
  }
}
