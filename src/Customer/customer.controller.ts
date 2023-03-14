import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, Session, } from "@nestjs/common";
import { Delete, UploadedFile, UseGuards, UseInterceptors, UsePipes } from "@nestjs/common/decorators";
import { FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, ValidationPipe } from "@nestjs/common/pipes";
import { CustomerService } from "./customer.service";
import { customerLoginDTO } from "./CustomerDTOs/customerLogin.dto";
import { CustomerDTO } from "./CustomerDTOs/CustomerDTO.dto";
import { SessionGuard } from "src/User/session.guard";
import { retry } from "rxjs";
// import session, { Session } from "express-session";
import { UserDTO } from "src/User/UserDTOs/user.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@UseGuards(SessionGuard)
@Controller("/api/customer")
// @Roles('customer')
// @UseGuards(RolesGuard)
export class CustomerController
{
    constructor(private CustomerService: CustomerService){}
    
    

    @Get("/user")
    getCustomerWithUser()
    {
        return this.CustomerService.getUserCustomer();
    }
    @Get("/:id")
    async getUserByID(@Param("id", ParseIntPipe) id:number):Promise<any>
    {
        return this.CustomerService.getById(id);
    }
    @Post("/insert")
    @UsePipes(new ValidationPipe)
    CreateUser(@Body() user:CustomerDTO):any
    { 
        return this.CustomerService.add(user);
    }
    @Put("/update/:id")
    @UsePipes(new ValidationPipe)
    UpdateUser(@Body() user:CustomerDTO, @Param("id", ParseIntPipe) id:number)
    {
        console.log("here");
        return this.CustomerService.update(id, user);
    }

    @Delete("/delete/:id")
    DeleteUser(@Param("id", ParseIntPipe) id:number)
    {
        return this.CustomerService.delete(id);
    }

    @Post("/upload/:id")
    @UseInterceptors(FileInterceptor('myfile',
    {
        storage:diskStorage({
            destination: 'src/CustomerUploads',
            filename: function (req, file, cb) {
                cb(null,Date.now()+file.originalname)
            }
        })
    }))
    async FileUpload(@Param("id", ParseIntPipe) id:number, @UploadedFile(  new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 640000 }),
          new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
      }),) file: Express.Multer.File)
    {
        
        const user = await this.getUserByID(id);

        user.FileName = file.filename;
        console.log("user: ", user);
        // user.FileName = file.filename;
        // console.log("BBB file: ", user.FileName);
        
        return this.CustomerService.FileUpload(user);     

    }
    @Get()
    getUsers(){
        return this.CustomerService.getAll();
    }




}