/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [RegistrationController],
  // eslint-disable-next-line prettier/prettier
  providers: [RegistrationService, UserService],
})
export class RegistrationModule {}