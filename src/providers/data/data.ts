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
      {crn: '2370', subject: 'ART 110', section: '11', title: 'Principles of Two Dimensional Design', pageLink: PageOnePage},
      {crn: '3683', subject: 'ART 110', section: '12', title: 'Principles of Two Dimensional Design', pageLink: PageTwoPage},
      {crn: '2161', subject: 'ART 135', section: '11', title: 'Drawing', pageLink: PageThreePage},
      {crn: '2162', subject: 'ART 140', section: '11', title: 'Painting - Technique & Style', pageLink: PageFourPage},
      {crn: '3520', subject: 'CHI 101', section: '11', title: 'Elementary Chinese', pageLink: PageFivePage},
      {crn: '2317', subject: 'COM 108', section: '01', title: 'Introduction to Digital Media Production', pageLink: PageSixPage},
      {crn: '3684', subject: 'COM 108', section: '01H', title: 'Introduction to Digital Media Production', pageLink: PageSevenPage},
      {crn: '2359', subject: 'COM 112', section: '11H', title: 'Digital Photography & Imaging', pageLink: PageEightPage}
    ]

  }

  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return item.subject.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
