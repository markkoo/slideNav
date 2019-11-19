import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  isOpen: boolean;

  totalChildNotice: number;
  showChild = true;

  constructor() { }

  ngOnInit() {
  }

}
