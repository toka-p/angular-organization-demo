import { Component, OnDestroy, OnInit } from '@angular/core';
import { SecondService } from './second.service';
import { Subscription } from 'rxjs';
import { Repository } from '../models/Repository';

/**
 * This component demonstrates the relationship between a component and a service
 * A component is interested only what to show and how to react to user interaction.
 * So if we have a component which is supposed to show a repository, we only care that we
 * are getting one from a service.
 *
 * Keep as little of the business logic in a component as possible. Good rule of thumb:
 * component is only interested in what is show and user interaction. Everything else belongs to a server.
 */

@Component({
  selector: 'od-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {

  private sub: Subscription|undefined;
  public repo: Repository|undefined;

  constructor(private readonly secondServer: SecondService) { }

  ngOnInit(): void {
    this.sub = this.secondServer.repoSubject.subscribe(r => this.repo = r);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
