import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courseone: any[];

  constructor(db: AngularFireDatabase) {

    // Subscribes to courseone database
    db.list('/courseone').valueChanges()
      .subscribe(courseone => {
      this.courseone = courseone;
      console.log(this.courseone);
    });

  }

}
