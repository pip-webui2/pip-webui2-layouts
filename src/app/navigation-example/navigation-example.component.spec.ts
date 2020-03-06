import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationExampleComponent } from './navigation-example.component';

describe('TestExampleComponent', () => {
  let component: NavigationExampleComponent;
  let fixture: ComponentFixture<NavigationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
