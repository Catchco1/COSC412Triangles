import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {BandsApiService} from './bands_api.service';

@Component({
    selector: 'app-bands',
    templateUrl: './bands.component.html',
    styleUrls: ['./bands.component.css']
  })
  export class BandsComponent {
    bandsListSubs: Subscription;
    bandsSpotifyList: any;
    bandsAIList : any;
    test : any;
  
    constructor(private bandsApi: BandsApiService) {
    }
  
    // ngOnInit() {
    //   this.bandsListSubs = this.bandsApi
    //     .getBands(this.search)
    //     .subscribe(res => {
    //         this.bandsList = res;
    //       },
    //       console.error
    //     );
    // }
    onSpotifyEnter(search) {
      this.bandsListSubs = this.bandsApi
        .getSpotifyBands(search)
        .subscribe(res => {
            this.bandsSpotifyList = res;
          },
          console.error
        );
    }
    onAIEnter(search) {
      this.bandsListSubs = this.bandsApi
        .getAIBands(search)
        .subscribe(res => {
            this.test = []
            for(var i = 1; i < 10; i++)
              this.test.push(res[i])
            this.bandsAIList = this.test;
          },
          console.error
        );
    }
  }