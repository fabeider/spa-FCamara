import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';
import { AuthenticationService } from './_services/authentication.service';


@Injectable()
export class ProductService {
  private productsUrl = 'http://127.0.0.1:8080/api/products';
  private mustLogin = false;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  getProducts(): Observable<Product[]>{
    let headers = new Headers({ 'x-access-token': this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.productsUrl, options)
    .map(this.extractData)
    .catch((err) => {
      if (err.status === 401) {
        var observable = this.handleError(err);
        this.authenticationService.logout();
        this.router.navigate(['/login']);
        return observable;
      } else {
        return this.handleError(err);
      }
    });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';

      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      console.log(errMsg);
      if (error.status == 401)
      {
        this.mustLogin = true;
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
