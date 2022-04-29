import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AddDataPage } from '../add-data/add-data';
import { EditDataPage } from '../edit-data/edit-data';


/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
	 posts: any = [];
  numberOfPosts = 0;
  constructor(public navCtrl: NavController, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    this.getData();
  }
 ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
    this.numberOfPosts = this.numberOfPosts + 1;
      db.executeSql('CREATE TABLE IF NOT EXISTS posts(rowid INTEGER PRIMARY KEY, date TEXT, title TEXT, content TEXT)', {})
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));
      db.executeSql('SELECT * FROM posts ORDER BY rowid DESC', {})
      .then(res => {
        this.posts = [];
        this.numberOfPosts = res.rows.length;
        for(var i=0; i<res.rows.length; i++) {
          this.posts.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,title:res.rows.item(i).title,content:res.rows.item(i).content})
        }
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));

  }

  addData() {
    this.navCtrl.push(AddDataPage);
  }

  editData(rowid) {
    this.navCtrl.push(EditDataPage, {
      rowid:rowid
    });
  }

  deleteData(rowid) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM posts WHERE rowid=?', [rowid])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
