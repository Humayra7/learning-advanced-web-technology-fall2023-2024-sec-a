/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/entities/user.entity';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  async registerUser(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.registrationService.registerUser(registerUserDto);
  }
}