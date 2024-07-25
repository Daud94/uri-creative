import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { FacebookStrategy } from './facebook.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PassportModule.register({ session: true }), UsersModule],
  providers: [AuthService, FacebookStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
