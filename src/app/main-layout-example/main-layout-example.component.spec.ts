import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutExampleComponent } from './main-layout-example.component';

describe('MainLayoutExampleComponent', () => {
  let component: MainLayoutExampleComponent;
  let fixture: ComponentFixture<MainLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
