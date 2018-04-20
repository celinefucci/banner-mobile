import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-page-six',
  templateUrl: 'page-six.html',
})
export class PageSixPage {

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
      message: 'Introduces students to production, design and project management environments for digital projects. Students will develop communication and design skills, with an emphasis on text-based communication and presentation of numeric data in textual and graphical modes. Restricted to students in the CID and IMGD majors.',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

}
