import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';

describe('AppModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    const appModule = module.get<AppModule>(AppModule);
    expect(appModule).toBeDefined();
  });

  it('should import ConfigModule globally', () => {
    const configModule = module.get<ConfigModule>(ConfigModule, {
      strict: false,
    });
    expect(configModule).toBeDefined();
  });

  it('should import ContactModule', () => {
    const contactModule = module.get<ContactModule>(ContactModule, {
      strict: false,
    });
    expect(contactModule).toBeDefined();
  });
});
