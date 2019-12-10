import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../env';

@Injectable()
export class BandsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  getSpotifyBands(bandName): Observable<any> {
    console.log('test')
    return this.http.get<any>(encodeURI(`${API_URL}/bands?name=` + bandName));
  }
  getAIBands(bandName): Observable<any> {
    console.log('test')
    return this.http.get<any>(encodeURI(`${API_URL}/predict_api?search=` + bandName));
  }
}