import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyamphoneComponent } from './shyamphone.component';

describe('ShyamphoneComponent', () => {
  let component: ShyamphoneComponent;
  let fixture: ComponentFixture<ShyamphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyamphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShyamphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
