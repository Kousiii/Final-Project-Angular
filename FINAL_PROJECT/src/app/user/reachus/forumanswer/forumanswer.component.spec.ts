import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumanswerComponent } from './forumanswer.component';

describe('ForumanswerComponent', () => {
  let component: ForumanswerComponent;
  let fixture: ComponentFixture<ForumanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumanswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
