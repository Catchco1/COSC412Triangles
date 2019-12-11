import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {BandsApiService} from './bands_api.service';

@Component({
    selector: 'app-bands',
    templateUrl: './bands.component.html',
    styleUrls: ['./bands.component.css']
  })
  export class BandsComponent {
    bandsSpotifyListSubs: Subscription;
    bandsAIListSubs: Subscription;
    bandsSpotifyList: any;
    bandsAIList : any;
    test : any;
  
    constructor(private bandsApi: BandsApiService) {}
    onSpotifyEnter(search) {
      this.bandsSpotifyListSubs = this.bandsApi
        .getSpotifyBands(search)
        .subscribe(res => {
            this.bandsSpotifyList = res;
          },
          console.error
        );
    }
    onAIEnter(search) {
      this.bandsAIListSubs = this.bandsApi
        .getAIBands(search)
        .subscribe(res => {
            this.test = []
            for(var i in res)
              this.test.push(res[i])
            this.bandsAIList = this.test;
          },
          console.error
        );
    }
  }