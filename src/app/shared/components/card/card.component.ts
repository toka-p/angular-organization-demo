import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'od-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public message = '';

  constructor() { }

  ngOnInit(): void {
  }

}
