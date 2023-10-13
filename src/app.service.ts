import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    try {
      return process.env;
    } catch (err) {
      return { err: err.message };
    }
  }

  getHealth(): object {
    return {
      calories: 50,
      heartRate: 60,
    };
  }
}
