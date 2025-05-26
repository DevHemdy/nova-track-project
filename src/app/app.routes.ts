import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { CompanyComponent } from './pages/company/company.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { FormComponent } from './pages/form/form.component';
import { Form2Component } from './pages/form-2/form-2.component';
import { FormSummaryComponent } from './pages/form-summary/form-summary.component';
import { ResetPasswordComponent } from './pages/account/reset-password/reset-password.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { LoginComponent } from './pages/account/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'company', component: CompanyComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'tickets', component: TicketsComponent},
    {path: 'form', component: FormComponent},
    {path: 'form-2', component: Form2Component},
    {path: 'form-summary', component: FormSummaryComponent},
    {path: 'password-reset', component: ResetPasswordComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent}

];
