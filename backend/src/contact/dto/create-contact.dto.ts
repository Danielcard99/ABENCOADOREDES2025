import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateContactDto {
  @IsString({ message: 'O nome deve ser um texto' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsEmail({}, { message: 'O e-mail informado é inválido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @IsPhoneNumber('BR', { message: 'O telefone informado é inválido' })
  @IsNotEmpty({ message: 'O telefone é obrigatório' })
  phone: string;

  @IsNotEmpty({ message: 'A mensagem é obrigatória' })
  @IsString({ message: 'A mensagem deve ser um texto' })
  @MinLength(10, { message: 'A mensagem precisa ter no mínimo 10 caracteres' })
  message: string;
}
