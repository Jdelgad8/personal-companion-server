import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { GATEWAY_PORT } from './constants';

const port = GATEWAY_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Gateway ready to listen at port ${port}`);
  await app.listen(port);
}

bootstrap();
