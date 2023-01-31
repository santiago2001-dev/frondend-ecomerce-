import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcurmbsComponent } from './breadcurmbs.component';

describe('BreadcurmbsComponent', () => {
  let component: BreadcurmbsComponent;
  let fixture: ComponentFixture<BreadcurmbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcurmbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcurmbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
