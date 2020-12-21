import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// var bodyParser = require('body-parser')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api')
  // app.use(bodyParser.json())
  await app.listen(3000);
}
bootstrap();
