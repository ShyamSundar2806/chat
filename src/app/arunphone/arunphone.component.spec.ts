import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArunphoneComponent } from './arunphone.component';

describe('ArunphoneComponent', () => {
  let component: ArunphoneComponent;
  let fixture: ComponentFixture<ArunphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArunphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArunphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
