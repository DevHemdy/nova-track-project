import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { CompanyComponent } from './pages/company/company.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TicketsComponent } from './pages/tickets/tickets.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'company', component: CompanyComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'tickets', component: TicketsComponent}
];
