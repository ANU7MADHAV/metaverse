import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  @HttpCode(200)
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post()
  @HttpCode(201)
  async create(data: User): Promise<User | string> {
    return this.userService.create(data);
  }
}
