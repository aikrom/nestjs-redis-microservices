import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'first_service' })
  microserviceTest(data: string): string {
    return data + ' - first microservice!';
  }
}
