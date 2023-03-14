import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookModule } from './Employee/cook/cook.module';
import { DMModule } from './Employee/deliveryman/deliveryman.module';
import { ManagerModule } from './Employee/manager/manager.module';
import { WaiterModule } from './Employee/waiter/waiter.module';

@Module({
  imports: [ManagerModule, WaiterModule, DMModule, CookModule, TypeOrmModule.forRoot({
    type:'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'hello',
    database: 'CheckEmployee',
    autoLoadEntities: true,
    synchronize: true,})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
