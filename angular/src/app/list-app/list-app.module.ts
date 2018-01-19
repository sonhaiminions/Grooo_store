import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ListAppService } from '../core/api/list-app-json.service';
import { routing } from './list-app.routing';

import { ListAppComponent } from './list-app.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        routing
    ],
    declarations:
    [
        ListAppComponent
    ],
    providers: [],


})

export class ListAppModule { }