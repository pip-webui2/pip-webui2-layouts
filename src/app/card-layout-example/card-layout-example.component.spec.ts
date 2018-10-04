import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLayoutExampleComponent } from './card-layout-example.component';

describe('CardLayoutExampleComponent', () => {
  let component: CardLayoutExampleComponent;
  let fixture: ComponentFixture<CardLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLayoutExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
