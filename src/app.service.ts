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
      success: true,
      heartRate: 60,
    };
  }
}
