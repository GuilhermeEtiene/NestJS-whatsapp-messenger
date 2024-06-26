import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt/jwt-strategy.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1 day',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService, PrismaService],
})
export class AuthModule {}
