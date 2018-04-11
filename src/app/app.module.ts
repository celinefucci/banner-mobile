import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PageOnePage } from '../pages/page-one/page-one';
import { PageTwoPage } from '../pages/page-two/page-two';
import { PageThreePage } from '../pages/page-three/page-three';
import { PageFourPage } from '../pages/page-four/page-four';
import { PageFivePage } from '../pages/page-five/page-five';
import { PageSixPage } from '../pages/page-six/page-six';
import { PageSevenPage } from '../pages/page-seven/page-seven';
import { PageEightPage } from '../pages/page-eight/page-eight';
import { HttpModule } from '@angular/http';
import { DataProvider } from '../providers/data/data';

const firebaseConfig = {
    apiKey: "AIzaSyBKV2vaPjOf-cH6xrKDTagvBBuuj0J5R_w",
    authDomain: "poly-banner-mobile.firebaseapp.com",
    databaseURL: "https://poly-banner-mobile.firebaseio.com",
    projectId: "poly-banner-mobile",
    storageBucket: "poly-banner-mobile.appspot.com",
    messagingSenderId: "177635682751"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageOnePage,
    PageTwoPage,
    PageThreePage,
    PageFourPage,
    PageFivePage,
    PageSixPage,
    PageSevenPage,
    PageEightPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageOnePage,
    PageTwoPage,
    PageThreePage,
    PageFourPage,
    PageFivePage,
    PageSixPage,
    PageSevenPage,
    PageEightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
  ]
})
export class AppModule {}
