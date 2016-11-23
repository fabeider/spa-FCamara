import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {
private productsUrl = 'http://127.0.0.1:8080/products';

constructor(private http: Http) {}

getProducts(): Observable<Product[]>{
  return this.http.get(this.productsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
                    }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  private handleError (error: Response | any) {
    console.log("handle error");
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 }
