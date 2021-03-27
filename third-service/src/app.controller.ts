import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'third_service' })
  microserviceTest(data: string): string {
    return data + ' - third microservice!';
  }
}
