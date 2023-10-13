import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the hello world!!';
  }
    getHealth(): object {
    return {
      calories: 50,
      heartRate: 60,
    };
  }

    getTest(): object {
    try {
      return process.env;
    } catch (err) {
      return err.message;
    }
  }
}
