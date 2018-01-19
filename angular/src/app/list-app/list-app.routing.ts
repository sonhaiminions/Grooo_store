import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDetailsModule } from './app-details/app-details.module';
import { ListAppComponent } from './list-app.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    { path: '', component: ListAppComponent },
    { path: 'detail', loadChildren: 'app/list-app/app-details/app-details.module#AppDetailsModule' },
    // { path: 'detail/:name', loadChildren: 'app/list-app/app-details/app-details.module#AppDetailsModule' },
];

export const routing = RouterModule.forChild(routes);
