import { Injectable } from '@angular/core';

@Injectable()

export class DataserviceService {

  constructor() { }

  cars = [
    'Ford','Maruti','Chevrolet','Audi'
  ];

  myData() {return 'This is service data'};
}
