import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-page-fourteen',
  templateUrl: 'page-fourteen.html',
})
export class PageFourteenPage {

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
      message: 'Introduces gamification as the use of frameworks and common design tropes from the game industry in new contexts. Focuses on theory exploring behavior and design within games and gaming, as well as game thinking in non-game contexts.',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

}
