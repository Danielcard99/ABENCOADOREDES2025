import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
