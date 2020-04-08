import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.scss']
})
export class NavigationMainComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription;

  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
