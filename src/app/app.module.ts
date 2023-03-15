import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PostPage } from './components/post/post';
import { HomePage } from './components/home/home';
import { LoginPage } from './components/login/login';
import { AboutPage } from './components/about/about';
import { MapPage } from './components/map/map';
import { MainpagePage } from './components/mainpage/mainpage';
import { TabsPage } from './components/tabs/tabs';
import { AddDataPage } from './components/add-data/add-data';
import { EditDataPage } from './components/edit-data/edit-data';
import { BlogPage } from './components/blog/blog';

import { Toast } from '@ionic-native/toast';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { WordpressService } from '../services/wordpress.service';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    MyApp,
    PostPage,
    HomePage,
    AddDataPage,
    EditDataPage,
    BlogPage,
    LoginPage,
    MainpagePage,
    AboutPage,
    MapPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.FirebaseConfiguration),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    HomePage,
    AddDataPage,
    EditDataPage,
    BlogPage,
    LoginPage,
    MainpagePage,
    AboutPage,
    MapPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicStorageModule,
    WordpressService,
    AuthenticationService,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
