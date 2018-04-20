import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-page-thirteen',
  templateUrl: 'page-thirteen.html',
})
export class PageThirteenPage {

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
      message: 'Students will relate game experiences, play games and build a game relating to their interests. Different game design frameworks will be discussed, analyzed and implemented. The course will cover table top games, serious games and gamification of different fields.',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

}
