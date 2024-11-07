import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
