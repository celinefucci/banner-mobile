import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

import { PageOnePage } from '../page-one/page-one';
import { PageTwoPage } from '../page-two/page-two';
import { PageThreePage } from '../page-three/page-three';
import { PageFourPage } from '../page-four/page-four';
import { PageFivePage } from '../page-five/page-five';
import { PageSixPage } from '../page-six/page-six';
import { PageSevenPage } from '../page-seven/page-seven';
import { PageEightPage } from '../page-eight/page-eight';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });

  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

  changePage(item: any) {
    this.navCtrl.push(item.pageLink);
  }

}
