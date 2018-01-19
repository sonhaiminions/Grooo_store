import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppVersionsComponent } from './app-versions/app-versions.component';
import { AppDetailsComponent } from './app-details.component';

const routes: Routes = [
    { path: '', component: AppDetailsComponent },
    { path: 'version', component: AppVersionsComponent },
];

export const routing = RouterModule.forChild(routes);
