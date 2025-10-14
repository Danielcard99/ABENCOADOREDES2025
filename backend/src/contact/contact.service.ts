import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private configService: ConfigService) {}

  async sendMessage(dto: CreateContactDto) {
    const transporter = nodemailer.createTransport({
      host: this.configService.get('SMTP_HOST'),
      port: Number(this.configService.get('SMTP_PORT')),
      secure: false,
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASS'),
      },
    });

    const html = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #212121;">
    <h2 style="color: #1e88e5;">Nova mensagem de contato</h2>
    <p><strong>Nome:</strong> ${dto.name}</p>
    <p><strong>Email:</strong> ${dto.email}</p>
    <p><strong>Telefone:</strong> ${dto.phone}</p>
    <p><strong>Mensagem:</strong></p>
    <p style="padding-left: 10px; border-left: 2px solid #1e88e5; color: #555;">${dto.message}</p>
    <hr style="border-color: #64b5f6;" />
    <p style="font-size: 0.9em; color: #555;">Esta mensagem foi enviada através do formulário de contato do site.</p>
  </div>
`;

    await transporter.sendMail({
      from: `"Abençoado Redes" <${this.configService.get('SMTP_FROM')}>`,
      to: this.configService.get('CONTACT_RECEIVER'),
      replyTo: dto.email,
      subject: `Contato de ${dto.name}`,
      html,
    });

    this.logger.log(`Mensagem enviada com sucesso: ${dto.email}`);
  }
}
