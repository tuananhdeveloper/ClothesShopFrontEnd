import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class RouteService {

  private routeChangedSource = new Subject<string>();

  // Observable string streams
  routeChanged$ = this.routeChangedSource.asObservable();

  // Service message commands
  changeRoute(mission: string) {
    this.routeChangedSource.next(mission);
  }
}