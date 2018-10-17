import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxLayoutExampleComponent } from './fx-layout-example.component';

describe('FxLayoutExampleComponent', () => {
  let component: FxLayoutExampleComponent;
  let fixture: ComponentFixture<FxLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxLayoutExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
