import { Component } from '@angular/core';
import { RouteService } from './router.service';
import { Subscription }   from 'rxjs';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnDestroy{
  title = 'ClothesShopFrontEnd';
  subscription;

  profileView = false;
  constructor(private routeService: RouteService) {
    this.subscription = routeService.routeChanged$.subscribe(
      value => {
        this.profileView = true;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
