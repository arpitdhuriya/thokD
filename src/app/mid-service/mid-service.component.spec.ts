import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidServiceComponent } from './mid-service.component';

describe('MidServiceComponent', () => {
  let component: MidServiceComponent;
  let fixture: ComponentFixture<MidServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
