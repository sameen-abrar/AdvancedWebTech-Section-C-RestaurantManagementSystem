import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  Session,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// import session from 'express-session';
import { CustomerService } from 'src/Customer/customer.service';
// import { CustomerDTO } from 'src/Customer/CustomerDTOs/CustomerDTO.dto';
import { SessionGuard } from './session.guard';
import { UserService } from './user.service';
import CompositeObject from './UserDTOs/compositeobj.dto';
import { UserDTO } from './UserDTOs/user.dto';

@Controller('/api/user')
export class UserController {
  constructor(
    private userService: UserService,
    private customerService: CustomerService,
  ) {}

  @Post('login')
  async Login(@Session() session1: UserDTO, @Body() user: UserDTO) {
    const userdata = await this.userService.Login(user);
    console.log('Controller userdata: ', userdata);
    if (userdata !== null) {
      console.log('inside if: ', userdata);
      session1.UserName = user.UserName;

      console.log('session username: ', session1.UserName);

      const customer = userdata;
      return userdata;
    } else {
      return { message: 'invalid credentials' };
    }
  }

  @Get('customer/:id')
  // @UseGuards(SessionGuard)
  getCustomerWithUser(@Param('id', ParseIntPipe) id: number): any {
    console.log('in controller');
    return this.userService.getCustomerWithUserId(id);
  }

  @Get('customer')
  // @UseGuards(SessionGuard)
  getCustomersWithUsers(): any {
    console.log('in controller');
    return this.userService.getUserWithCustomer();
  }

  @Get(':id')
  getUserByID(@Param('id', ParseIntPipe) id: number): any {
    return this.userService.getById(id);
  }

  @Post('insert')
  @UsePipes(new ValidationPipe())
  async CreateUser(@Body() data: CompositeObject): Promise<any> {
    console.log('data:', data);

    const user = data.user;
    const customer = data.customer;
    user.Registration_Date = new Date();
    user.Type = 'CUSTOMER';
    customer.no_of_returns = 0;

    console.log('Extracted user:', data.user);
    console.log('Extracted customer:', data.customer);

    // return await this.userService.add(user);
    const newUser = await this.userService.add(user);
    console.log('New User:', newUser.id);
    // return newUser;

    if (newUser.id != null) {
      customer.userId = newUser.id;
      // console.log('New User:', newUser);

      const newCus = await this.customerService.add(customer);

      return { newUser, newCus };
    }

    return { message: 'unsuccessful insert' };
  }

  @Put('update/:id')
  @UsePipes(new ValidationPipe())
  UpdateUser(@Body() user: UserDTO, @Param('id', ParseIntPipe) id: number) {
    console.log('here');
    return this.userService.update(id, user);
  }

  @Delete('delete/:id')
  DeleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }

  // @Get('login')
  // @UsePipes(new ValidationPipe)
  // Login(@Session() session, @Body() user: UserDTO)
  // {
  //     const userdata = this.userService.Login(user);
  //     if(userdata)
  //     {
  //         console.log("User: ", userdata)
  //         session.UserName = user.UserName;

  //         // console.log(session.UserName);
  //         return userdata;

  //     }
  //     else
  //     {
  //         return {message:"invalid credentials"};
  //     }
  // }

  @Get('')
  getUsers(): any {
    console.log('in controller');
    return this.userService.getAll();
  }
}
