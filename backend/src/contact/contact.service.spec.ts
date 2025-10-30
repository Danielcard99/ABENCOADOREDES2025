import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';
import { CreateContactDto } from './dto/create-contact.dto';
import { InternalServerErrorException } from '@nestjs/common';

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn(),
}));

describe('ContactService', () => {
  let service: ContactService;

  const mockConfigService: Partial<ConfigService> = {
    get: jest.fn(),
  };

  const dto: CreateContactDto = {
    name: 'Daniel',
    email: 'daniel@example.com',
    phone: '(71) 99999-9999',
    message: 'Hello, Id like to know more about the service',
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    (mockConfigService.get as jest.Mock).mockImplementation((key: string) => {
      switch (key) {
        case 'SENDGRID_API_KEY':
          return 'fake-api-key';
        case 'SENDGRID_FROM':
          return 'no-reply@abencoadoredes.com';
        case 'CONTACT_RECEIVER':
          return 'contato@empresa.com';
        default:
          return null;
      }
    });

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<ContactService>(ContactService);

    jest.spyOn(service['logger'], 'log').mockImplementation(() => {});
    jest.spyOn(service['logger'], 'error').mockImplementation(() => {});

    (sgMail.setApiKey as jest.Mock).mockImplementation(() => {});
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an error if SENDGRID_API_KEY is not configured.', () => {
    (mockConfigService.get as jest.Mock).mockReturnValueOnce(undefined);

    expect(
      () => new ContactService(mockConfigService as ConfigService),
    ).toThrow('SENDGRID_API_KEY não configurada.');
  });

  it('should send the email successfully.', async () => {
    (sgMail.send as jest.Mock).mockResolvedValueOnce({});

    const response = await service.sendMessage(dto);

    expect(sgMail.send).toHaveBeenCalledTimes(1);
    expect(sgMail.send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'contato@empresa.com',
        from: {
          email: 'no-reply@abencoadoredes.com',
          name: 'Abençoado Redes',
        } as MailDataRequired['from'],
        subject: `Contato de ${dto.name}`,
      }),
    );
    expect(response).toEqual({ message: 'Mensagem enviada com sucesso!' });
  });

  it('should throw an InternalServerErrorException if the submission fails.', async () => {
    (sgMail.send as jest.Mock).mockRejectedValueOnce(
      new Error('Erro no SendGrid'),
    );

    await expect(service.sendMessage(dto)).rejects.toThrow(
      InternalServerErrorException,
    );

    expect(sgMail.send).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if SENDGRID_FROM is missing.', async () => {
    (mockConfigService.get as jest.Mock).mockImplementation((key: string) => {
      if (key === 'SENDGRID_FROM') return undefined;
      if (key === 'CONTACT_RECEIVER') return 'contato@empresa.com';
      if (key === 'SENDGRID_API_KEY') return 'fake-api-key';
      return null;
    });

    const serviceWithoutFrom = new ContactService(
      mockConfigService as ConfigService,
    );

    await expect(serviceWithoutFrom.sendMessage(dto)).rejects.toThrow(
      'Variáveis SENDGRID_FROM ou CONTACT_RECEIVER ausentes',
    );
  });

  it('should throw an error if CONTACT_RECEIVER is missing.', async () => {
    (mockConfigService.get as jest.Mock).mockImplementation((key: string) => {
      if (key === 'CONTACT_RECEIVER') return undefined;
      if (key === 'SENDGRID_FROM') return 'no-reply@abencoadoredes.com';
      if (key === 'SENDGRID_API_KEY') return 'fake-api-key';
      return null;
    });

    const serviceWithoutReceiver = new ContactService(
      mockConfigService as ConfigService,
    );

    await expect(serviceWithoutReceiver.sendMessage(dto)).rejects.toThrow(
      'Variáveis SENDGRID_FROM ou CONTACT_RECEIVER ausentes',
    );
  });
});
