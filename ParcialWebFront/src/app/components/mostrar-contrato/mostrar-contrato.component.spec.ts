import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarContratoComponent } from './mostrar-contrato.component';

describe('MostrarContratoComponent', () => {
  let component: MostrarContratoComponent;
  let fixture: ComponentFixture<MostrarContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
