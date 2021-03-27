import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('FIRST_SERVICE') private readonly firstClient: ClientProxy,
    @Inject('SECOND_SERVICE') private readonly secondClient: ClientProxy,
    @Inject('THIRD_SERVICE') private readonly thirdClient: ClientProxy,
  ) {}

  @Get('/first')
  testFirstService(): Observable<string> {
    return this.firstClient.send<string>(
      { cmd: 'first_service' },
      'Message from',
    );
  }

  @Get('/second')
  testSecondService(): Observable<string> {
    return this.secondClient.send<string>(
      { cmd: 'second_service' },
      'Message from',
    );
  }

  @Get('/third')
  testThirdService(): Observable<string> {
    return this.thirdClient.send<string>(
      { cmd: 'third_service' },
      'Message from',
    );
  }

  @Get('/undefined')
  testWhatService(): Observable<string> {
    return this.firstClient.send<string>({ cmd: 'undefined' }, 'Message from');
  }
}
