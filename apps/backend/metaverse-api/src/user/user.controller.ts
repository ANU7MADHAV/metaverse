import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findOne(@Body() data: string): Promise<User | string> {
    return await this.userService.findOne(data);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: User): Promise<User | string> {
    return await this.userService.create(data);
  }
}
