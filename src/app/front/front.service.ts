import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontService {
  private readonly _dataSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  public get dataSubject(): Observable<boolean> {
    return this._dataSubject.asObservable()
  }

  constructor() {
    timer(0, 1000).subscribe(() => {
      const value = Math.floor(Math.random() * 3) % 2 === 0;
      console.log(`Setting value to ${value}`);
      this._dataSubject.next(value);
    });
  }


}
