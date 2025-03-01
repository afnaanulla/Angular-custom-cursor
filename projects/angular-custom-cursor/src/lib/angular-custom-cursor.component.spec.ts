import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCustomCursorComponent } from './angular-custom-cursor.component';

describe('AngularCustomCursorComponent', () => {
  let component: AngularCustomCursorComponent;
  let fixture: ComponentFixture<AngularCustomCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCustomCursorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCustomCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
