import { Routes } from '@angular/router';
import { InsertarContratoComponent } from './components/insertar-contrato/insertar-contrato.component';
import { MostrarContratoComponent } from './components/mostrar-contrato/mostrar-contrato.component';

export const routes: Routes = [
    { path: '', redirectTo: 'ver', pathMatch: 'full' },
    { path: 'insertar', component: InsertarContratoComponent },
    { path: 'ver', component: MostrarContratoComponent },
];
