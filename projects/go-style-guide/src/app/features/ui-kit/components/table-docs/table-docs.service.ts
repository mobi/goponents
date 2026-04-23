import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

export interface FakeData {
  active: boolean;
  alive: boolean;
  email: string;
  gender: 'Male' | 'Female';
  id: number;
  ip_address: string;
  last_login: string | null;
  login_attempts: number | undefined;
  name: {
    first: string;
    last: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TableDocsService {

  constructor (private datePipe: DatePipe) { }

  public generateData(length: number): FakeData[] {
    return Array.from({ length: length }, (_: any, key: number) => key).map((index: any) => {
      const baseObj: FakeData = this.createObject(index);
      baseObj['children'] = Array.from({ length: 5 }, (_: any, key: number) => key).map((i: any) => {
        return this.createObject(i);
      });

      return baseObj;
    });
  }

  private createObject(index: number): FakeData {
    return {
      id: index + 1,
      name: {
        first: faker.person.firstName(),
        last: faker.person.lastName()
      },
      email: faker.internet.email(),
      gender: index % 3 ? 'Male' : 'Female',
      ip_address: faker.internet.ip(),
      active: faker.datatype.boolean(),
      alive: faker.datatype.boolean(),
      last_login: faker.datatype.boolean() ? this.datePipe.transform(faker.date.past({ years: 1 }), 'short') : null,
      login_attempts: faker.datatype.boolean() ? faker.number.int({ min: 1, max: 5 }) : undefined
    };
  }
}
