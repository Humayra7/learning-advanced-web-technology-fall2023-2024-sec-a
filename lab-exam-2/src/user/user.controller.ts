/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from '../entities/user.entity';
import { RegisterUserDto } from 'src/registration/dto/register-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: RegisterUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  // Implement other user-related endpoints as needed
}