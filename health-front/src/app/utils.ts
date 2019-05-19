import { Injectable } from '@angular/core';

export const BASE_URL: string = 'http://10.0.1.130:3000';

@Injectable()
export class DateFormatConverter {
  static backToFront(dateString: string): string {
    return `${dateString.slice(8, 10)}${dateString.slice(5, 7)}${dateString.slice(0, 4)}`;
  }

  static frontToBack(dateString: string): string {
    return`${dateString.slice(4, 8)}-${dateString.slice(2, 4)}-${dateString.slice(0, 2)}`;
  }
}
