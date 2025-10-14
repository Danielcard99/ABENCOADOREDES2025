import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async sendMessage(@Body() dto: CreateContactDto) {
    await this.contactService.sendMessage(dto);
    return { message: 'Mensagem enviada com sucesso' };
  }
}
