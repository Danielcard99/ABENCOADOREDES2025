import { Test, TestingModule } from '@nestjs/testing';
import { ContactModule } from './contact.module';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ConfigService } from '@nestjs/config';

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn(),
}));

describe('ContactModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [ContactModule],
    })
      .overrideProvider(ConfigService)
      .useValue({
        get: (key: string) =>
          key === 'SENDGRID_API_KEY' ? 'SG.fake-api-key' : null,
      })
      .compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should have ContactService as a provider', () => {
    const service = module.get<ContactService>(ContactService);
    expect(service).toBeDefined();
  });

  it('should have ContactController as a controller', () => {
    const controller = module.get<ContactController>(ContactController);
    expect(controller).toBeDefined();
  });
});
