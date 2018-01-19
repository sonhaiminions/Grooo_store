import { Component, OnInit } from '@angular/core';
import { ListAppService } from '../../../core/api/list-app-json.service';

@Component({
  selector: 'app-app-versions',
  templateUrl: './app-versions.component.html',
  styleUrls: ['./app-versions.component.css']
})
export class AppVersionsComponent implements OnInit {

  public versions: any[];
  constructor (private VersionsService: ListAppService) {}

  ngOnInit() {
    this.VersionsService.getList().subscribe((response: any) => {
      this.versions = response;
    }, error => {
      console.log(error);
    });
  }

}
