import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/courses').valueChanges()
      .subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

}
