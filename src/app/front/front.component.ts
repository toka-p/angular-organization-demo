import { Component, OnDestroy, OnInit } from '@angular/core';
import { FrontService } from './front.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'od-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit, OnDestroy {

  public displayMessage = false;

  private dataSub:Subscription|null = null;

  constructor(private readonly frontService: FrontService) {
  }

  ngOnInit(): void {
    // Without this there is a memory leak if person navigates to anotherp age
    this.dataSub = this.frontService.dataSubject.subscribe(isTrue => {
      console.log('Received value', isTrue);
      this.displayMessage = isTrue;
    });
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }

}
