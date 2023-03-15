import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WordpressService } from '../../../services/wordpress.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  images = { logo: "/assets/images/WiiTravel-Logo.png" };
  switcher: string = "login";
  error_message: string;
  tab: any;
  user = {} as User;
  login_form: FormGroup;
  register_form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public wordpressService: WordpressService,
    public authenticationService: AuthenticationService,
    private angularFireService: AngularFireAuth,
    public alertCtrl: AlertController
  ) { this.tab = this.navCtrl.parent; }

  ionViewWillLoad() {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.login_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.required)
    });

    loading.dismiss();
  }

  // WP ADMIN Login
  onWpLogin(values): void {
    this.authenticationService.login(this.user)
      .subscribe({
        next: (response: any) => {
          if(response.data){
            localStorage.setItem('user', JSON.stringify(response.data));
            this.navCtrl.setRoot(TabsPage);
          }
        },
        error: (err: any) => {
          console.log('Error: ', err);
        }
      })
  }

  // WP ADD USER
  onWpRegister(data, token): void{
  this.authenticationService.register(data, token)
          .subscribe({
            next: (response : any) => {
              console.log(response);
            },
            error : (err: any) => {
              console.log('Error: ', err);
            } 
          }
        );
  }

  // ANGULAR FIRE REGISTER
  async firebaseReg(user: User) {
    try {
      const result = this.angularFireService.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (result) {
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Your Account Has Been Registered !',
          buttons: ['OK']
        });
        alert.present();
      }
    }
    catch (e) {
      console.error(e);
    }
  }

   // ANGULAR FIRE AUTH WITH EMAIL/PASS
  async firebaseLogin(user: User) {
    try {
      const result = this.angularFireService.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    }
    catch (e) {
      let alert = this.alertCtrl.create({
        title: 'Please try Again!',
        message: (e),
        buttons: ['OK']
      });
      alert.present();
    }
  }

  skip() {
    this.navCtrl.setRoot(TabsPage);
  }
}
