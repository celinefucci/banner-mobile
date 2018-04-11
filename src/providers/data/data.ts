import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { PageOnePage } from '../../pages/page-one/page-one';
import { PageTwoPage } from '../../pages/page-two/page-two';
import { PageThreePage } from '../../pages/page-three/page-three';
import { PageFourPage } from '../../pages/page-four/page-four';
import { PageFivePage } from '../../pages/page-five/page-five';
import { PageSixPage } from '../../pages/page-six/page-six';
import { PageSevenPage } from '../../pages/page-seven/page-seven';
import { PageEightPage } from '../../pages/page-eight/page-eight';

@Injectable()
export class DataProvider {

  items: any;

  constructor(public http: Http) {

    this.items = [
      {subject: 'ART 110', pageLink: PageOnePage},
      {subject: 'ART 110', pageLink: PageTwoPage},
      {subject: 'ART 135', pageLink: PageThreePage},
      {subject: 'ART 140', pageLink: PageFourPage},
      {subject: 'CHI 101', pageLink: PageFivePage},
      {subject: 'COM 106', pageLink: PageSixPage},
      {subject: 'COM 112', pageLink: PageSevenPage},
      {subject: 'COM 112', pageLink: PageEightPage}
    ]

  }

  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return item.subject.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
