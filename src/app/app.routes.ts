import { Routes } from '@angular/router';
import { DiagramComponent } from './diagram/diagram.component';

export const routes: Routes = [
    {path: "diagram", component: DiagramComponent},
    {path: "", redirectTo: "diagram", pathMatch: "full"}
];
