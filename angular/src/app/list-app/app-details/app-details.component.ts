import { Component, OnInit } from '@angular/core';
import { ListAppService } from '../../core/api/list-app-json.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
  public apps: any[];
  constructor(private AppService: ListAppService) { }

  ngOnInit() {
    this.AppService.getList().subscribe((response: any) => {
      this.apps = response;
    }, errors => {
      console.log(errors);
    });
  }

}
