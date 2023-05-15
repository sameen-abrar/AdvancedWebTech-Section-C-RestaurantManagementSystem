import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(
    session({
      secret: 'my-secret',
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 360000000
      }
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
