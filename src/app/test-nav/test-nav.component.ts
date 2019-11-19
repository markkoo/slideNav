import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-test-nav',
  templateUrl: './test-nav.component.html',
  styleUrls: ['./test-nav.component.scss'],
  animations: [
    trigger('slideUpDown', [
      state('true', style({
        height: '*'
      })),
      state('false', style({
        height: 0
      })),
      transition('1 <=> 0', animate('300ms ease-in'))
    ])
  ]
})
export class TestNavComponent {

  smallNav = false;
  slideDown = true;
  slideDown1 = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  save() { }
  undo() { }

  constructor(private breakpointObserver: BreakpointObserver) { }

}
