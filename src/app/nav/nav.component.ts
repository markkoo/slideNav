import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.gotParent]': 'gotParent',
    '[class.close]': 'opened'
  }
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
  opened: boolean;

  @Input()
  gotParent: false;

  constructor() { }

  ngOnInit() {
  }

}
