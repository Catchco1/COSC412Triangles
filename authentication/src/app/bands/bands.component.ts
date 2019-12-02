import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import {BandsApiService} from './bands_api.service';
import {Bands} from './bands.model';

@Component({
    selector: 'app-bands',
    templateUrl: './bands.component.html',
    styleUrls: ['./bands.component.css']
  })
  export class BandsComponent {
    bandsListSubs: Subscription;
    bandsList: any;
  
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
    onEnter(search) {
      this.bandsListSubs = this.bandsApi
        .getBands(search)
        .subscribe(res => {
            this.bandsList = res;
          },
          console.error
        );
    }
  }