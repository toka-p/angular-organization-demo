import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Observable, ReplaySubject, timer } from 'rxjs';
import { Repository } from '../models/Repository';
import { environment } from '../../environments/environment';

/**
 * This demonstrates abstracting away irrelevant information from components.
 * SecondComponent is using this service to get single repo data since that is the
 * only thing it is interested in. This service on the other hand is interested in
 * getting repositores and getting that random repo to provide for the component.
 *
 * Keep as much business logic in services as possible.
 */

@Injectable({
  providedIn: 'root'
})
export class SecondService {
  private readonly _repoSubject = new ReplaySubject<Repository>();

  public get repoSubject(): Observable<Repository> {
    return this._repoSubject.asObservable();
  }

  constructor(private readonly api: ApiService) {
    timer(1, environment.apiPollTime).subscribe(() => this.loadRandomRepo());
  }

  private loadRandomRepo() {
    this.api.getRepos().subscribe(repos => {
      console.log('I got repos', repos);

      if(repos.length) {
        const randomRepo = repos[Math.floor(Math.random()*repos.length)];
        this._repoSubject.next(randomRepo);
      }
    });
  }
}
