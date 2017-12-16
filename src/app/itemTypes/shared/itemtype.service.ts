import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ItemType} from './itemType.model';
import {Observable} from 'rxjs/Observable';

const url = environment.apiEndpoint + '/itemtype';

@Injectable()
export class ItemtypeService {

  constructor(private http: HttpClient) {  }

  get(): Observable<ItemType[]> {
    return this.http
      .get<ItemType[]>(url);
  }

  create(itemType: ItemType): Observable<ItemType> {
    return this.http
      .post<ItemType>(url, itemType);
  }
}
