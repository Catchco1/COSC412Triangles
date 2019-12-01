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
  export class BandsComponent implements OnInit {
    bandsListSubs: Subscription;
    bandsList: any;
  
    constructor(private bandsApi: BandsApiService) {
    }
  
    ngOnInit() {
      this.bandsListSubs = this.bandsApi
        .getBands()
        .subscribe(res => {
            this.bandsList = res;
          },
          console.error
        );
    }
  }