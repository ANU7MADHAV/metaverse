import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(data: User) {
    const checkUserExist = this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (checkUserExist) {
      return 'Already exist';
    }
    const createUser = this.prisma.user.create({ data });
    return createUser;
  }

  findAll() {
    return this.prisma.user.findMany();
  }
}
