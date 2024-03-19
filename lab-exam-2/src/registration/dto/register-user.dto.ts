/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  confirmPassword: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  phoneNumber: string;

  
}