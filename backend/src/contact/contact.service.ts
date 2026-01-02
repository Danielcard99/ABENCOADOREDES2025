import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateContactDto } from './dto/create-contact.dto';
import { Resend } from 'resend';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly resend: Resend;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('RESEND_API_KEY');

    if (!apiKey) {
      throw new Error('RESEND_API_KEY não configurada.');
    }

    this.resend = new Resend(apiKey);
  }

  async sendMessage(dto: CreateContactDto) {
    const from = this.configService.get<string>('RESEND_FROM');
    const to = this.configService.get<string>('CONTACT_RECEIVER');

    if (!from || !to) {
      throw new Error('Variáveis RESEND_FROM ou CONTACT_RECEIVER ausentes');
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

    try {
      await this.resend.emails.send({
        from: `Abençoado Redes <${from}>`,
        to: [to],
        subject: `Contato de ${dto.name}`,
        replyTo: dto.email,
        html,
      });

      this.logger.log(`Mensagem enviada com sucesso por ${dto.email}`);
      return { message: 'Mensagem enviada com sucesso!' };
    } catch (error) {
      this.logger.error('Erro ao enviar mensagem via Resend', error);

      throw new ServiceUnavailableException(
        'Serviço de e-mail temporariamente indisponível. Tente novamente mais tarde.',
      );
    }
  }
}
