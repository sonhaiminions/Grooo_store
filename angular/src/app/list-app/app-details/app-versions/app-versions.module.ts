import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppService } from '../../../core/api/list-app-json.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule
    ]
})

export class AppVersionsModule { }
