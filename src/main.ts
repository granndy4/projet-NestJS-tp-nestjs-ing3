import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe({
whitelist: true,
forbidNonWhitelisted: true,
transform: true,
}));
const config = app.get(ConfigService);
const port = Number(config.get<string>('PORT') ?? '8000');
await app.listen(port);
console.log(`Application running on http://localhost:${port}`);
}
bootstrap();