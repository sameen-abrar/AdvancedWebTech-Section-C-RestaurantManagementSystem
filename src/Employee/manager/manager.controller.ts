import { Controller, Get, Post,Param, Put, Delete,Query, Body, Patch, ParseIntPipe, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator, UseInterceptors, ValidationPipe, Session, UnauthorizedException, UseGuards, UsePipes} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CookInfo } from '../cook/cook.dto';
import { CookService } from '../cook/cook.service';
import { DMInfo } from '../deliveryman/deliveryman.dto';
import { DMService } from '../deliveryman/deliveryman.service';
import { WaiterInfo } from '../waiter/waiter.dto';
import { WaiterService } from '../waiter/waiter.service';
import { ManagerInfo } from './manager.dto';
import { ManagerService } from './manager.service';
import { SessionGuard } from './managersession.guard';

@Controller('/manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService, private waiterService: WaiterService, private cookService: CookService,private dmService: DMService) {}

  @Get('/viewmanager')
  @UseGuards(SessionGuard)
  getManager(): any {
    return this.managerService.getManager();
  }

  @Post('/sendemail')
  @UseGuards(SessionGuard)
    sendEmail(@Body() mydata){
    return this.managerService.sendEmail(mydata);
    }

  /*@Post('/insertmanager')
  insertManager(@Body(new ValidationPipe()) manager: ManagerInfo) : any {
    return this.managerService.insertManager(manager)
  }
  
  @Delete('/removemanager/:m_id')
  removeManager(@Session() session, @Param('m_id') m_id:any): any {
    return this.managerService.removeManager(m_id,session.m_email);
  }*/

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signup(@Body() manager:ManagerInfo, ){
    return this.managerService.signup(manager);
  }

/*@Post('/signup')
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() manager:ManagerInfo,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 16000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

manager.m_profile = file.filename;  

return this.managerService.signup(manager);
console.log(file)
}*/


    @Get('/signin')
    signin(@Session() session, @Body() manager:ManagerInfo)
    {
    if(this.managerService.signin(manager))
    {
      session.m_email = manager.m_email;
      return {message:"success"};

    }
    else
    {
      return {message:"invalid credentials"};
    }
    
    }

  @Post('/profileupload')
  @UseGuards(SessionGuard)
  @UseInterceptors(FileInterceptor('profilepic',
    {storage:diskStorage({
      destination: './uploads',
      filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname)
      }
    })
    }))
    uploadprofile(@UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 16000 }),
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File, @Session() session, @Body() manager:ManagerInfo){

    manager.m_profile = file.filename;
    return this.managerService.uploadProfilePic(session.m_email,manager)

    }

    @Get('/signout')
    @UseGuards(SessionGuard)
    signout(@Session() session)
    {
      if(session.destroy())
      {
        return {message:"you are logged out"};
      }
      else
      {
        throw new UnauthorizedException("invalid actions");
      }
}

@Get('/viewwaiter')
@UseGuards(SessionGuard)
  getWaiter(): any {
    return this.waiterService.getWaiter();
  }

  @Post('/addwaiter')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  addWaiter(@Body() waiter: WaiterInfo) : any {
    return this.waiterService.addWaiter(waiter);
  }

  @Put('/modifywaiter')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  modifyWaiter(@Body('w_name') w_name ,
            @Body('w_age') w_age,
            @Body('w_gender') w_gender,
            @Body('w_address') w_address,
            @Body('w_salary') w_salary, 
            @Body('w_email') w_email,
            @Body('w_contact') w_contact,
            @Body('m_id') m_id,
            @Body('w_id') w_id): any {
    return this.waiterService.modifyWaiter(w_name, w_age, w_gender, w_address,w_salary,w_email,w_contact,m_id,w_id);
  }

  @Patch('/updatewaiter/:w_id')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  updateWaiter(@Param('w_id',ParseIntPipe) w_id: any , @Body() waiter: WaiterInfo): any {
    return this.waiterService.updateWaiter(w_id, waiter);
  }

  @Delete('/removewaiter/:w_id')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  removeWaiter(@Param() w_id: number): any {
    return this.waiterService.removeWaiter(w_id);
  }

  @Get('/findwaiter')
  @UseGuards(SessionGuard)
  findWaiter(@Query() query: any): any {
    return this.waiterService.findWaiter(query);
  }

  @Get('/findwaitersbymanager/:m_id')
  @UseGuards(SessionGuard)
  getManagerByAdminID(@Param('m_id', ParseIntPipe) m_id: number): any {
    return this.managerService.getWaitersByManagerID(m_id);
  }

  @Get('/findmanagerbywaiter/:w_id')
  @UseGuards(SessionGuard)
  getAdminByManagerID(@Param('w_id', ParseIntPipe) w_id: number): any {
    return this.waiterService.getManagerByWaiterID(w_id);
  }

 @Get('/viewcook')
 @UseGuards(SessionGuard)
  getCook(): any {
    return this.cookService.getCook();
  }

  @Post('/addcook')
  @UseGuards(SessionGuard)
  addCook(@Body(new ValidationPipe()) cook: CookInfo) : any {
    return this.cookService.addCook(cook);
  }

  @Put('/modifycook')
  @UseGuards(SessionGuard)
  modifyCook(@Body('c_name') c_name ,
            @Body('c_age') c_age,
            @Body('c_gender') c_gender,
            @Body('c_address') c_address,
            @Body('c_salary') c_salary, 
            @Body('c_email') c_email,
            @Body('c_contact') c_contact,
            @Body('m_id') m_id,
            @Body('c_id') c_id): any {
    return this.cookService.modifyCook(c_name, c_age, c_gender, c_address,c_salary,c_email,c_contact,m_id,c_id);
  }


  @Patch('/updatecook/:c_id')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  updateCook(
    @Body() cook: CookInfo,
    @Param('c_id', ParseIntPipe) c_id: number,
  ): any {
    return this.cookService.updateCook(cook, c_id);
  }

  @Delete('/removecook/:c_id')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  removeCook(@Param('c_id' , ParseIntPipe) c_id: number): any {
    return this.cookService.removeCook(c_id);
  }

  @Get('/findcook')
  @UseGuards(SessionGuard)
  findCook(@Query() query: any): any {
    return this.cookService.findCook(query);
  }

  @Get('/viewdeliveryman')
  @UseGuards(SessionGuard)
  getDM(): any {
    return this.dmService.getDM();
  }

  @Post('/add')
  @UseGuards(SessionGuard)
  addDM(@Body(new ValidationPipe()) dm: DMInfo) : any {
    return this.dmService.addDM(dm);
  }

  @Put('/modifydeliveryman')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  modifyDM(@Body('dm_name') dm_name ,
            @Body('dm_age') dm_age,
            @Body('dm_gender') dm_gender,
            @Body('dm_address') dm_address,
            @Body('dm_salary') dm_salary, 
            @Body('dm_email') dm_email,
            @Body('dm_contact') dm_contact,
            @Body('dm_vehicleno') dm_vehicleno,
            @Body('m_id') m_id,
            @Body('dm_id') dm_id): any {
    return this.dmService.modifyDM(dm_name, dm_age, dm_gender, dm_address,dm_salary,dm_email,dm_contact,dm_vehicleno,m_id,dm_id);
  }


  @Patch('/updatedeliveryman/:dm_id')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  updateDM(
    @Body() dm: DMInfo,
    @Param('dm_id', ParseIntPipe) dm_id: number,
  ): any {
    return this.dmService.updateDM(dm, dm_id);
  }

  @Delete('/removedeliveryman/:dm_id')
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  removeDM(@Param('dm_id' , ParseIntPipe) dm_id: number): any {
    return this.dmService.removeDM(dm_id);
  }

  @Get('/finddeliveryman')
  @UseGuards(SessionGuard)
  findDM(@Query() query: any): any {
    return this.dmService.findDM(query);
  }

}