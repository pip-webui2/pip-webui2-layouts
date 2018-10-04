import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuLayoutExampleComponent } from './main-menu-layout-example.component';

describe('MainMenuLayoutExampleComponent', () => {
  let component: MainMenuLayoutExampleComponent;
  let fixture: ComponentFixture<MainMenuLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuLayoutExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
