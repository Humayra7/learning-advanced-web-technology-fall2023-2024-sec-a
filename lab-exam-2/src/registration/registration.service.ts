/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RegistrationService {
  constructor(private readonly userRepository: UserService) {}

  async registerUser(userData: RegisterUserDto): Promise<User> {
    // Implement registration logic here
    // For example, create a new user and save it to the database
    const newUser = await this.userRepository.createUser(userData);
    return newUser;
  }
}