import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

  constructor(public http: Http) { }

  login(user: User) {
    return this.http.post(`${environment.WPConfiguration.WORDPRESS_URL}/wp-json/jwt-auth/v1/token`, user);
  }

  register(data: any, token){
    return this.http.post(`${environment.WPConfiguration.WORDPRESS_REST_API_URL}/users?token=${token}`, data);
  }
}
