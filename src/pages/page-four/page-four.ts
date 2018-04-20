import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-page-four',
  templateUrl: 'page-four.html',
})
export class PageFourPage {

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
      message: 'An investigation of visual art forms and techniques that influence and express qualities of American culture. Aspects of design, color and style will be explored through studio experience, lecture, slides, and demonstrations. Fulfills Gen Ed: The Arts.',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

}
