import { Body, Controller, Delete, Get, Param, Patch, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import Account from './account.entity';
import { AppService } from './app.service';
import CreateAccountDto from './createaccount.dto';
import CreateOwnerDto from './createowner.dto';
import UpdateAccountDto from './updateaccount.entity';
import UpdateOwnerDto from './updateowner.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/accounts')
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.appService.createAccount(createAccountDto);
  }

  @Get('/accounts')
  findAllAccounts() {
    return this.appService.findAllAccounts();
  }

  @Get('/accounts/:id')
  findOneAccount(@Param('id') id: string) {
    return this.appService.findOneAccount(+id);
  }

  @Patch('/accounts/:id')
  updateAccount(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.appService.updateAccount(+id, updateAccountDto);
  }

  @Delete('/accounts/:id')
  removeAccount(@Param('id') id: string) {
    return this.appService.removeAccount(+id);
  }

  @Post('/owners')
  createOwner(@Body() createOwnertDto: CreateOwnerDto) {
    return this.appService.createOwner(createOwnertDto);
  }

  @Get('/owners')
  findAllOwners() {
    return this.appService.findAllOwners();
  }

  @Get('/owners/:id')
  findOneOwner(@Param('id') id: string) {
    return this.appService.findOneOwner(+id);
  }

  @Patch('/owners/:id')
  updateOwner(@Param('id') id: string, @Body() updateOwnerDto: UpdateOwnerDto) {
    return this.appService.updateAccount(+id, updateOwnerDto);
  }

  @Delete('/owners/:id')
  removeOwner(@Param('id') id: string) {
    return this.appService.removeOwner(+id);
  }

}
