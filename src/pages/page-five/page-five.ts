import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-page-five',
  templateUrl: 'page-five.html',
})
export class PageFivePage {

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
      message: 'Designed for students with no previous knowledge of Chinese. The course aims to help students obtain the four basic language skills of listening, speaking, reading and writing the Chinese language. Students will learn basic vocabulary and sentence structures for use in essential daily-life situations through various forms of oral practice. Fulfills Gen Ed: Foreign Language.',
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

}
