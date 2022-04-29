import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as Config from '../config';

@Injectable()
export class AuthenticationService {

  constructor(
    public http: Http
  ){}





  doLogin(username, password){
    return this.http.post(Config.WORDPRESS_URL + 'wp-json/jwt-auth/v1/token',{
      username: username,
      password: password
    })
  }

  doRegister(user_data, token){
    return this.http.post(Config.WORDPRESS_REST_API_URL + 'users?token=' + token, user_data);
  }

  validateAuthToken(token){
    let header : Headers = new Headers();
    header.append('Authorization','Basic ' + token);
    return this.http.post(Config.WORDPRESS_URL + 'wp-json/jwt-auth/v1/token/validate?token=' + token,
      {}, {headers: header})
  }
}
