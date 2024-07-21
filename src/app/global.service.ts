// global.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  setTime(timestamp: number): string {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - timestamp;
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    if (hoursAgo === 0) {
      if (minutesAgo < 1) {
        return 'Just now';
      } else {
        return minutesAgo + ' minutes ago';
      }
    } else {
      return hoursAgo + ' hours ago';
    }
  }
}
