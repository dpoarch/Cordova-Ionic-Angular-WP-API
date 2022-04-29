import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {
    tab:Tabs;
  data = { date:"", title:"", content:"" };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {

    this.tab = this.navCtrl.parent
    }

  saveData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO posts VALUES(NULL,?,?,?)',[this.data.date,this.data.title,this.data.content])
        .then(res => {
          console.log(res);
          this.toast.show('Post has been saved successfully!', '5000', 'center').subscribe(
            toast => {
              this.tab.select(3);
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

}
