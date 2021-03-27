import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FIRST_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
      {
        name: 'SECOND_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
      {
        name: 'THIRD_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
