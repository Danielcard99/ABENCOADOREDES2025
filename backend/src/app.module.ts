import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health/health.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ContactModule],
  controllers: [HealthController],
})
export class AppModule {}
