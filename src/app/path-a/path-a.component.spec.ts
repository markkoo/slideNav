import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathAComponent } from './path-a.component';

describe('PathAComponent', () => {
  let component: PathAComponent;
  let fixture: ComponentFixture<PathAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
