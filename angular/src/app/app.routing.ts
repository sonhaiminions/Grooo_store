import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListAppModule} from './list-app/list-app.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ListAppComponent } from './list-app/list-app.component';

const appRoutes: Routes = [
    { path: 'list-app', loadChildren: 'app/list-app/list-app.module#ListAppModule' },
    { path: 'login', component: LoginComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];

export const approuting = RouterModule.forRoot(appRoutes);
