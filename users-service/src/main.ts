import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3105;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`server ready to listen at port ${port}`);
  await app.listen(port);
}

bootstrap();
