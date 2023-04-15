import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from './../../../modules/auth/domain/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }

  async validate(usename: string, password: string) {
    const user = this.authService.validateUser(usename, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
