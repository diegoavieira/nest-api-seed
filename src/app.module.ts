import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environments from './config/environments';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [environments] })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
