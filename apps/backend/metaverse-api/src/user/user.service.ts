import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(data: User) {
    this.prisma.user.create({ data });
  }

  findAll() {
    return this.prisma.user.findMany();
  }
}
