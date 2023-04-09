import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Session,
} from '@nestjs/common';
import {
  Delete,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common/decorators';
import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  ValidationPipe,
} from '@nestjs/common/pipes';
import { CustomerService } from './customer.service';
import { customerLoginDTO } from './CustomerDTOs/customerLogin.dto';
import { CustomerDTO } from './CustomerDTOs/CustomerDTO.dto';
import { SessionGuard } from 'src/User/session.guard';
import { retry } from 'rxjs';
// import session, { Session } from "express-session";
import { UserDTO } from 'src/User/UserDTOs/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MenuService } from './Menu/menu.service';
import { OrderedItemsDTO } from './CustomerDTOs/OrderedItemsDTO.dto';
import { RolesGuard } from 'src/Roles/role.guard';
import { Roles } from 'src/Roles/roles';
import { Role } from 'src/Roles/roles.enum';

@Controller('/api/customer')
// @Roles(Role.Customer)
// @UseGuards(SessionGuard, RolesGuard)
export class CustomerController {
  constructor(
    private CustomerService: CustomerService,
    private MenuService: MenuService,
  ) {}

  @Get('/user')
  getCustomersWithUsers() {
    return this.CustomerService.getUserCustomer();
  }

  @Get('user/:id')
  // @UseGuards(SessionGuard)
  getUserWithCustomerId(@Param('id', ParseIntPipe) id: number): any {
    console.log('in controller');
    return this.CustomerService.getUserWithCustomerId(id);
  }

  @Get('/:id')
  // @Roles(Role.Customer)
  // @UseGuards(SessionGuard, RolesGuard)
  async getUserByID(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.CustomerService.getById(id);
  }

  @Get('/cart/:id')
  async getCartWithCustomerId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.CustomerService.getCartWithCustomerId(id);
  }

  @Post('/insert')
  @UsePipes(new ValidationPipe())
  CreateUser(@Body() user: CustomerDTO): any {
    return this.CustomerService.add(user);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  UpdateUser(@Body() user: CustomerDTO, @Param('id', ParseIntPipe) id: number) {
    console.log('here');
    return this.CustomerService.update(id, user);
  }

  @Delete('/delete/:id')
  DeleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.CustomerService.delete(id);
  }

  @Post('/upload/:id')
  @UseInterceptors(
    FileInterceptor('myfile', {
      storage: diskStorage({
        destination: 'src/CustomerUploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  async FileUpload(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 640000 }),
          new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const user = await this.getUserByID(id);

    user.FileName = file.filename;
    console.log('user: ', user);
    // user.FileName = file.filename;
    // console.log("BBB file: ", user.FileName);

    return this.CustomerService.FileUpload(user);
  }

  @Post('/sendemail')
  sendEmail(@Body() mydata) {
    return this.CustomerService.sendEmail(mydata);
  }

  @Get('/order/:id')
  // @UsePipes(ValidationPipe)
  Order(@Param('id', ParseIntPipe) id: number, @Body() order: OrderedItemsDTO) {
    order.customerId = id;

    return this.CustomerService.Order(order);
  }

  @Get('/menu')
  // @UsePipes(ValidationPipe)
  ViewMenu() {
    this.MenuService.getAll();
  }

  @Get()
  getUsers() {
    return this.CustomerService.getAll();
  }
}
