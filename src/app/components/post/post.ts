import { Component } from '@angular/core';
import { NavParams, NavController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WordpressService } from '../../../services/wordpress.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  post: any;
  user: string;
  comments: Array<any> = new Array<any>();
  categories: Array<any> = new Array<any>();
  morePagesAvailable: boolean = true;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public wordpressService: WordpressService,
    public authenticationService: AuthenticationService
  ) {

  }

  ionViewWillEnter(){
    this.morePagesAvailable = true;
    let loading = this.loadingCtrl.create();
    loading.present();
    this.post = this.navParams.get('item');

    Observable.forkJoin(
      this.getAuthorData(),
      this.getCategories(),
      this.getComments())
      .subscribe({
        next: (response: any) => {
          this.user = response[0].name;
          this.categories = response[1];
          this.comments = response[2];
          loading.dismiss();
        },
        error: (err: any) => {
          console.log('Error: ', err);
        }
      });
  }

  getAuthorData(){
    return this.wordpressService.getAuthor(this.post.author);
  }

  getCategories(){
    return this.wordpressService.getPostCategories(this.post);
  }

  getComments(){
    return this.wordpressService.getComments(this.post.id);
  }

  loadMoreComments(infiniteScroll) {
    let page = (this.comments.length/10) + 1;
    this.wordpressService.getComments(this.post.id, page)
    .subscribe({
      next: (response: any) => {
        for(let res of response){
          this.comments.push(res);
        }
        infiniteScroll.complete();
      },
      error: (err: any) => {
        console.log(err);
        this.morePagesAvailable = false;
      }
    })
  }

  goToCategoryPosts(categoryId, categoryTitle){
    this.navCtrl.push(HomePage, {
      id: categoryId,
      title: categoryTitle
    })
  }

  createComment(post: any){
    let user = JSON.parse(localStorage.getItem('user'));
    this.wordpressService.createComment(post.id, user, 'This is a sample comment...').subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (err: any) => {
        console.log('Error: ', err);
      }
    });
  }

}
