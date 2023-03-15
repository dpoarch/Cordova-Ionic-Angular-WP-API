import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading:LoadingController) {
  }
  
  ionViewDidLoad() {
    let loading = this.loading.create();
    loading.present();
    console.log('ionViewDidLoad MapPage');
    loading.dismiss();
  }

}
