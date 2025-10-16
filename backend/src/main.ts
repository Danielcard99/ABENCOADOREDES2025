import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://abencoadoredes-2025.vercel.app',
      'https://abencoadoredes.com.br',
      'https://www.abencoadoredes.com.br',
      'http://abencoadoredes.com.br',
      'http://www.abencoadoredes.com.br',
    ],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        const messages = errors
          .map((err) => Object.values(err.constraints || {}))
          .flat();
        return new BadRequestException(messages);
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
