import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecevivedComponent } from './recevived.component';

describe('RecevivedComponent', () => {
  let component: RecevivedComponent;
  let fixture: ComponentFixture<RecevivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecevivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecevivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
