import { RouterExtensions } from '@nativescript/angular';
import { Component, OnInit } from '@angular/core';
import { actionBarTitle } from './texts/home.text';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  selectedIndex = 0;

  barTitle = actionBarTitle;

  constructor(private routerExtensions: RouterExtensions) { }

  onSelectedIndexChange(newIndex: number) {
      // handle tab change
  }

	ngOnInit() { }

  goBack() {
      this.routerExtensions.backToPreviousPage();
  }

  openSettings() {
      // implement the cusotm logic
  }
}
