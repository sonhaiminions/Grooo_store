import { Component, OnInit } from '@angular/core';
import { ListAppService } from '../core/api/list-app-json.service';

//
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-list-app',
  templateUrl: './list-app.component.html',
  styleUrls: ['./list-app.component.css']
})
export class ListAppComponent implements OnInit {
  public apps: any[];
  constructor(private AppService: ListAppService) { }

  ngOnInit() {
    this.AppService.getList().subscribe((response: any) => {
      this.apps = response;
    }, error => {
      console.log(error);
    });
  }

}
