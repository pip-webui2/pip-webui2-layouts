import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesLayoutExampleComponent } from './tiles-layout-example.component';

describe('TilesLayoutExampleComponent', () => {
  let component: TilesLayoutExampleComponent;
  let fixture: ComponentFixture<TilesLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesLayoutExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
