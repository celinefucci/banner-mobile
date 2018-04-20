import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-page-three',
  templateUrl: 'page-three.html',
})
export class PageThreePage {

  courses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public db: AngularFireDatabase) {

  }

  // Subscribing to the database
  ionViewDidLoad() {
    this.db.object('/courses').valueChanges()
    .subscribe(courses => {
      this.courses = courses;
    });
  }

  // Course description
  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'This is a beginning course in free‑hand drawing. The student will be guided through a sequence of lessons beginning with line quality, the vocabulary of lines, and proceed through drawing materials and techniques, foreshortening and shading. Fulfills Gen Ed: The Arts.',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

}
