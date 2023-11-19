import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor() {}

  getDataCards(): Observable<any> {
    let mockResponse: any;
    mockResponse = require('./mock.reminders.json');
    return of(mockResponse);
  }
}
