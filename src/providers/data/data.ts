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
import { PageNinePage } from '../../pages/page-nine/page-nine';
import { PageTenPage } from '../../pages/page-ten/page-ten';
import { PageElevenPage } from '../../pages/page-eleven/page-eleven';
import { PageTwelvePage } from '../../pages/page-twelve/page-twelve';
import { PageThirteenPage } from '../../pages/page-thirteen/page-thirteen';
import { PageFourteenPage } from '../../pages/page-fourteen/page-fourteen';
import { PageFifteenPage } from '../../pages/page-fifteen/page-fifteen';

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
      {subject: 'COM 112', pageLink: PageEightPage},
      {subject: 'COM 200', pageLink: PageNinePage },
      {subject: 'COM 200', pageLink: PageTenPage},
      {subject: 'COM 200', pageLink: PageElevenPage},
      {subject: 'COM 219', pageLink: PageTwelvePage},
      {subject: 'COM 219', pageLink: PageThirteenPage},
      {subject: 'COM 239', pageLink: PageFourteenPage},
      {subject: 'COM 239', pageLink: PageFifteenPage}
    ]

  }

  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return item.subject.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
