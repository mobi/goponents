import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class TableDocsService {
  public generateData(length: number): Array<{}> {
    return Array.from({ length: length }, (_: any, key: number) => key).map((index: any) => {
      const baseObj: object = this.createObject(index);
      baseObj['children'] = Array.from({ length: 5 }, (_: any, key: number) => key).map((i: any) => {
        return this.createObject(i);
      });

      return baseObj;
    });
  }

  private createObject(index: number): any {
    return {
      id: index + 1,
      name: {
        first: faker.name.firstName(),
        last: faker.name.lastName()
      },
      email: faker.internet.email(),
      gender: index % 3 ? 'Male' : 'Female',
      ip_address: faker.internet.ip()
    };
  }
}
