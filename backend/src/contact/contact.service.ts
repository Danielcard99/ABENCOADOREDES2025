import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import sgMail from '@sendgrid/mail';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('SENDGRID_API_KEY');
    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY não configurada.');
    }
    sgMail.setApiKey(apiKey);
  }

  async sendMessage(dto: CreateContactDto) {
    const from = this.configService.get<string>('SENDGRID_FROM');
    const to = this.configService.get<string>('CONTACT_RECEIVER');

    if (!from || !to) {
      throw new Error('Variáveis SENDGRID_FROM ou CONTACT_RECEIVER ausentes');
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #212121;">
        <h2 style="color: #1e88e5;">Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${dto.name}</p>
        <p><strong>Email:</strong> ${dto.email}</p>
        <p><strong>Telefone:</strong> ${dto.phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="padding-left: 10px; border-left: 2px solid #1e88e5; color: #555;">${dto.message}</p>
        <hr style="border-color: #64b5f6;" />
        <p style="font-size: 0.9em; color: #555;">
          Você recebeu esta mensagem através do site 
          <a href="https://abencoadoredes-2025.vercel.app">Abençoado Redes</a>.
        </p>
      </div>
    `;

    const msg = {
      to,
      from: {
        email: from,
        name: 'Abençoado Redes',
      },
      subject: `Contato de ${dto.name}`,
      html,
      replyTo: dto.email,
    };

    try {
      await sgMail.send(msg);
      this.logger.log(`Mensagem enviada com sucesso por ${dto.email}`);
      return { message: 'Mensagem enviada com sucesso!' };
    } catch (error) {
      this.logger.error('Erro ao enviar mensagem via SendGrid', error);
      throw new InternalServerErrorException(
        'Erro ao enviar a mensagem. Tente novamente mais tarde.',
      );
    }
  }
}
