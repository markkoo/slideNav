import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathBComponent } from './path-b.component';

describe('PathBComponent', () => {
  let component: PathBComponent;
  let fixture: ComponentFixture<PathBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
