/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { RegisterUserDto } from 'src/registration/dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: RegisterUserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Implement other user-related methods as needed
}