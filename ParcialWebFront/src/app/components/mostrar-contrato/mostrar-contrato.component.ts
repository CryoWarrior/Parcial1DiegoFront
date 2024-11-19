import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratoServiceService } from '../../services/contrato-service.service';
import { Contrato } from '../../models/contrato/contrato.module';
@Component({
  selector: 'app-mostrar-contrato',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-contrato.component.html',
  styleUrl: './mostrar-contrato.component.css'
})
export class MostrarContratoComponent implements OnInit {
  contratos: Contrato[] = []; // Lista de contratos

  constructor(private contratoService: ContratoServiceService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerContratos();
  }

  obtenerContratos(): void {
    this.contratoService.getContratos().subscribe(
      (data) => {
        this.contratos = data; 
      },
      (error) => {
        console.error('Error al cargar los contratos:', error);
      }
    );
  }

  irACrearContrato(): void {
    this.router.navigate(['/insertar']); 
  }
}
