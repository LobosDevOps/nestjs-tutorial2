import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SerializedUser, User } from '../../../../interface/user';
import { User as UserEntity } from './../../../libs/orm-entities/user.entity';
import { CreateUserDto } from '../application/dto/createUser.dto';
import { edcodePassword } from './../../../libs/shared/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private users: User[] = [
    {
      id: 1,
      username: 'anson',
      password: 'anson',
      email: 'anson@gmail.com',
    },
    {
      id: 2,
      username: 'danny',
      password: 'danny',
      email: 'danny@gmail.com',
    },
    {
      id: 3,
      username: 'derek',
      password: 'derek',
      email: 'derek@gmail.com',
    },
    {
      id: 4,
      username: 'samntha',
      password: 'samntha',
      email: 'samntha@gmail.com',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => id === user.id);
  }

  createUser(createUserDto: CreateUserDto) {
    const password = edcodePassword(createUserDto.password);
    console.log(password);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password,
    });
    return this.userRepository.save(newUser);
  }

  // findUserByUsername(username: string) {
  //   return this.userRepository.findOne({
  //     where: {
  //       username,
  //     },
  //   });
  // }

  // findUserByUserId(id: number) {
  //   return this.userRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
