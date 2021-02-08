import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {ListElement} from './listElement';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listUrl = 'api/list-elements';

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getElements(): Observable<ListElement[]> {
    return this.http.get<ListElement[]>(this.listUrl, this.httpOptions).pipe(catchError(err => {
      throw new Error('couldnt get elements. Details:' + err);
    }));
  }

  addElement(element: ListElement): Observable<ListElement>{
    return this.http.post<ListElement>(this.listUrl, element, this.httpOptions).pipe(catchError(err => {
      throw  new Error('couldnt add element. Details:' + err);
    }));
  }

  updateElement(element: ListElement): Observable<any>{
    return this.http.put(this.listUrl, element, this.httpOptions).pipe(catchError(err => {
      throw new Error('couldnt update element. Details:' + err);
    }));
  }

  deleteElement(element: ListElement | number): Observable<ListElement>{
    const id = typeof element === 'number' ? element : element.id;
    const url = `$(this.listUrl)/$id`;

    return this.http.delete<ListElement>(url).pipe(catchError(err => {
      throw new Error('couldnt delete element. Details' + err);
    }));
  }

}
