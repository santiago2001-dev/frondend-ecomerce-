import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPseSuperiorComponent } from './pago-pse-superior.component';

describe('PagoPseSuperiorComponent', () => {
  let component: PagoPseSuperiorComponent;
  let fixture: ComponentFixture<PagoPseSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoPseSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoPseSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
