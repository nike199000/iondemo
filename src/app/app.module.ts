import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrMaskerModule } from 'brmasker-ionic-3';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { FrontPage } from '../pages/front/front';
import { HospitalPage } from '../pages/hospital/hospital';
import { HospitaldetailsPage } from '../pages/hospitaldetails/hospitaldetails';
import { BenefitPage } from '../pages/benefit/benefit';
import { ClaimstatusPage } from '../pages/claimstatus/claimstatus';
import { MainPage } from '../pages/main/main';

import { FamilymemberPage } from '../pages/familymember/familymember';
import { Familymember2Page } from '../pages/familymember2/familymember2';

import { SplashPage } from '../pages/splash/splash';
import { StatusdetailsPage } from '../pages/statusdetails/statusdetails';
import { EmailComposer } from '@ionic-native/email-composer';

import { SelectpolicyPage } from '../pages/selectpolicy/selectpolicy';
import { Selectpolicy2Page } from '../pages/selectpolicy2/selectpolicy2';

import { HTTP } from '@ionic-native/http';

import { Benefit2Page } from '../pages/benefit2/benefit2';
import { Claimstatus2Page } from '../pages/claimstatus2/claimstatus2';
import { Home2Page } from '../pages/home2/home2';
import { Register2Page } from '../pages/register2/register2';
import { Front2Page } from '../pages/front2/front2';
import { FeedbackPage } from '../pages/feedback/feedback';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ProfilePage,
    FrontPage,
    HospitalPage,
    BenefitPage,
    HospitaldetailsPage,
    ClaimstatusPage,
    MainPage,
    SplashPage,
    StatusdetailsPage,
    FamilymemberPage,
    Familymember2Page,
    Selectpolicy2Page,
    SelectpolicyPage,
    Benefit2Page,
    Claimstatus2Page,
    Home2Page,
    Register2Page,
    Front2Page,
    FeedbackPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ProfilePage,
    FrontPage,
    BenefitPage,
    Selectpolicy2Page,
    HospitalPage,
    HospitaldetailsPage,
    SplashPage,
    ClaimstatusPage,
    MainPage,
    StatusdetailsPage,
    FamilymemberPage,
    SelectpolicyPage,
        Benefit2Page,
        Familymember2Page,
    Claimstatus2Page,
    Home2Page,
    Register2Page,
    Front2Page,
    FeedbackPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    NativeStorage,
        HTTP,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
