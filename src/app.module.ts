import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './Customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/user.module';
import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from './roles.guard';
import { CustomerService } from './Customer/customer.service';
import { MenuModule } from './Customer/Menu/menu.module';
import { MenuService } from './Customer/Menu/menu.service';
import { UserService } from './User/user.service';


@Module({
  imports: [  TypeOrmModule.forRoot
    (
      { 
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'sameen',
        //  password: "asdf",
        database: 'RestaurantManagementSystem',
        autoLoadEntities: true,
        synchronize: true,
      }
    ), UserModule, CustomerModule,  MenuModule,],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule {}
// {  provide: APP_GUARD, useClass: RolesGuard },
// UserService, CustomerService,  MenuService, 