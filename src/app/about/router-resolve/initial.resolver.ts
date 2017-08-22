import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InitialResolver implements Resolve<any> {
  public resolve(route, state): Observable<any> | Promise<any> | any {
    console.log(4222);
    return 42;
  }
}
