import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app-details.routing';
import { ListAppService } from '../../core/api/list-app-json.service';

import { AppDetailsComponent } from './app-details.component';
import { AppVersionsComponent } from './app-versions/app-versions.component';
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        routing
    ],
    declarations:
    [
        AppVersionsComponent,
        AppDetailsComponent
    ],
    providers:
    [],

})

export class AppDetailsModule { }