import { Injectable } from '@nestjs/common';

import { CreateUserDto } from '../application/dto/createUser.dto';
import { UsersRepository } from '../infrastructure/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  getUsers() {
    return this.userRepository.getUsers();
  }

  getUserByUsername(username: string) {
    return this.userRepository.getUserByUsername(username);
  }

  getUserById(id: number) {
    return this.userRepository.getUserById(id);
  }

  createUser(createUserDto: CreateUserDto) {
    return this.userRepository.createUser(createUserDto);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findUserByUsername(username);
  }

  findUserByUserId(id: number) {
    return this.userRepository.findUserByUserId(id);
  }
}
