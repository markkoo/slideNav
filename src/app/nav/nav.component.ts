import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['../nav.scss']
})
export class NavComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  link: string;

  @Input()
  icon: string;

  @Input()
  totalNotice: number;

  @Input()
  isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

}
