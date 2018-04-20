import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-page-eight',
  templateUrl: 'page-eight.html',
})
export class PageEightPage {

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
      message: 'Explores concepts and techniques in digital photography and imaging. Builds and reinforces digital imaging skills including manipulation, light effects, scanning, color correction and special effects. Students will generate a portfolio of images based on specific themes. Fulfills Gen Ed: The Arts.',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

}
