import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
import { PageNinePage } from '../pages/page-nine/page-nine';
import { PageTenPage } from '../pages/page-ten/page-ten';
import { PageElevenPage } from '../pages/page-eleven/page-eleven';
import { PageTwelvePage } from '../pages/page-twelve/page-twelve';
import { PageThirteenPage } from '../pages/page-thirteen/page-thirteen';
import { PageFourteenPage } from '../pages/page-fourteen/page-fourteen';
import { PageFifteenPage } from '../pages/page-fifteen/page-fifteen';

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
    PageEightPage,
    PageNinePage,
    PageTenPage,
    PageElevenPage,
    PageTwelvePage,
    PageThirteenPage,
    PageFourteenPage,
    PageFifteenPage
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
    PageEightPage,
    PageNinePage,
    PageTenPage,
    PageElevenPage,
    PageTwelvePage,
    PageThirteenPage,
    PageFourteenPage,
    PageFifteenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
