import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

describe('ContactController', () => {
  let controller: ContactController;
  let service: ContactService;

  const mockContactService = {
    sendMessage: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [{ provide: ContactService, useValue: mockContactService }],
    }).compile();

    controller = module.get<ContactController>(ContactController);
    service = module.get<ContactService>(ContactService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('sendMessage', () => {
    const dto: CreateContactDto = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      message: 'Hello, world!',
    };

    it('should call the service method with the provided DTO', async () => {
      await controller.sendMessage(dto);
      expect(service.sendMessage).toHaveBeenCalledWith(dto);
      expect(service.sendMessage).toHaveBeenCalledTimes(1);
    });

    it('should return a success message', async () => {
      const result = await controller.sendMessage(dto);
      expect(result).toEqual({ message: 'Mensagem enviada com sucesso' });
    });
  });
});
