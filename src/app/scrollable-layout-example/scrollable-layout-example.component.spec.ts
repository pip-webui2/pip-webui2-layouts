import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableLayoutExampleComponent } from './scrollable-layout-example.component';

describe('ScrollableLayoutExampleComponent', () => {
  let component: ScrollableLayoutExampleComponent;
  let fixture: ComponentFixture<ScrollableLayoutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableLayoutExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableLayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
