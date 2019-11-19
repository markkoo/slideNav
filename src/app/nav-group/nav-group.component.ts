import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['../nav.scss'],
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
export class NavGroupComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  isOpen: boolean;

  totalChildNotice: number;
  slideDown = true;

  constructor() { }

  ngOnInit() {
  }

}
