import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickettableComponent } from './tickettable.component';

describe('TickettableComponent', () => {
  let component: TickettableComponent;
  let fixture: ComponentFixture<TickettableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickettableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TickettableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
