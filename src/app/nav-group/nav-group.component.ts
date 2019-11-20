import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.close]': 'opened'
  }
})
export class NavGroupComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  opened: boolean;

  totalChildNotice = 4;
  showChild = true;

  constructor() { }

  ngOnInit() {
  }

}
