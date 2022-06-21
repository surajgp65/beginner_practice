import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class UsersListComponent implements OnInit {
  userlist: any;
  filteredData: any;
  constructor(private http: HttpRequestService) {}

  ngOnInit(): void {
    this.getAllusers();
  }

  getAllusers() {
    try {
      this.http.request('get', '/users', null).subscribe((res: any) => {
        this.userlist = res;

        console.log('got DATA', res);
      });
    } catch (error) {}
  }

  deleteuser(id: any) {
    try {
      this.http
        .request('delete', '/users/' + id, null)
        .subscribe((res: any) => {
          this.getAllusers();
        });
    } catch (error) {}
  }
}
