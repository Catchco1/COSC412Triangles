import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_URL} from '../env';

@Injectable()
export class BandsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  getBands(bandName): Observable<any> {
    console.log('test')
    return this.http.get<any>(encodeURI(`${API_URL}/bands?name=` + bandName));
  }
}