import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'oc-autounsubscribe',
  template: ''
})
export abstract class AutoUnsubscribeComponent implements OnDestroy {
  protected $destroy: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.$destroy.next();
  }
}
