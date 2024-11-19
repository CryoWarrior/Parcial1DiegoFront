import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratoServiceService } from '../../services/contrato-service.service';
import { Contrato } from '../../models/contrato/contrato.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-insertar-contrato',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './insertar-contrato.component.html',
  styleUrl: './insertar-contrato.component.css'
})
export class InsertarContratoComponent implements OnInit {

  contratoForm: FormGroup = new FormGroup({});
  mensaje: string = '';



  constructor(
    private fb: FormBuilder,
    private contratoService: ContratoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contratoForm = this.fb.group({
      identificador: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(1)]],
      nombreContratante: ['', Validators.required],
      documentoContratante: ['', Validators.required],
      nombreContratantista: ['', Validators.required],
      documentoContratantista: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    });

    
  }

  anadirContrato(): void {
    if (this.contratoForm.valid) {
      const contrato: Contrato = this.contratoForm.value;
      this.contratoService.createContrato(contrato).subscribe(
        (response) => {
          this.mensaje = 'Contrato guardado exitosamente';
          this.contratoForm.reset();
          this.router.navigate(['/ver']);

        },
        (error) => {
          console.error('Error al guardar el contrato', error);
          this.mensaje = 'Error al guardar el contrato';
        }
      );
    }
  }

}
