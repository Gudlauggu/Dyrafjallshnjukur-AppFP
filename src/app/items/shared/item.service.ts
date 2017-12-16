import { Injectable } from '@angular/core';
import {Item} from './item.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const url = environment.apiEndpoint + '/item';
@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  get(): Observable<Item[]> {
  return this.http
    .get<Item[]>(url);
  }

  getById(id: number): Observable<Item> {
    return this.http
      .get<Item>(url + '/' + id);
  }

  delete(id: number): Observable<Item> {
    return this.http
      .delete<Item>(url + '/' + id);
  }

  create(item: Item): Observable<Item> {
    return this.http
      .post<Item>(url, item);
  }

}
