import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

import { AngularFireDatabase } from 'angularfire2/database';

import { PageOnePage } from '../page-one/page-one';
import { PageTwoPage } from '../page-two/page-two';
import { PageThreePage } from '../page-three/page-three';
import { PageFourPage } from '../page-four/page-four';
import { PageFivePage } from '../page-five/page-five';
import { PageSixPage } from '../page-six/page-six';
import { PageSevenPage } from '../page-seven/page-seven';
import { PageEightPage } from '../page-eight/page-eight';
import { PageNinePage } from '../page-nine/page-nine';
import { PageTenPage } from '../page-ten/page-ten';
import { PageElevenPage } from '../page-eleven/page-eleven';
import { PageTwelvePage } from '../page-twelve/page-twelve';
import { PageThirteenPage } from '../page-thirteen/page-thirteen';
import { PageFourteenPage } from '../page-fourteen/page-fourteen';
import { PageFifteenPage } from '../page-fifteen/page-fifteen';

var Button3 = new Audio();
Button3.src = "assets/audio/Button3.m4a";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses: any;
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public dataService: DataProvider, public db: AngularFireDatabase) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.db.object('/courses').valueChanges()
    .subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });

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
