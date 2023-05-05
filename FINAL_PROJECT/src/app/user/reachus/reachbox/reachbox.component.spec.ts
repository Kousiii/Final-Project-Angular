import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachboxComponent } from './reachbox.component';

describe('ReachboxComponent', () => {
  let component: ReachboxComponent;
  let fixture: ComponentFixture<ReachboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
