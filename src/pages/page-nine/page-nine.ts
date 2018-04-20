import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-page-nine',
  templateUrl: 'page-nine.html',
})
export class PageNinePage {

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
      message: 'Covers the study and practice of speech communication, emphasizing the development of effective public speaking abilities. FORMERLY COM 300. CANNOT RECEIVE CREDIT FOR BOTH COM 300 AND COM 200.',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

}
