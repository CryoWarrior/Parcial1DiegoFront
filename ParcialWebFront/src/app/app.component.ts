import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InsertarContratoComponent } from './components/insertar-contrato/insertar-contrato.component';
import { MostrarContratoComponent } from './components/mostrar-contrato/mostrar-contrato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InsertarContratoComponent, MostrarContratoComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ParcialWebFront';
}
