import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnularformsComponent } from './anularforms.component';

describe('AnularformsComponent', () => {
  let component: AnularformsComponent;
  let fixture: ComponentFixture<AnularformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnularformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnularformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
