import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpRequestService } from 'src/app/common-services/http-request.service';
import { createUser } from './create-user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CrudCreateComponent implements OnInit {
  createuser: createUser = {
    id: 0,
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    code: 0,
    mobile: 0,
  };
  userID: any;
  isEdit: boolean = false;
  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  userData: any;
  constructor(
    private http: HttpRequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.isEdit = true;
        this.userID = params['id'];
        this.getAllusers(this.userID);
      } else {
        this.isEdit = false;
      }
    });
  }

  // new FormControl('', Validators.required),
  createUser = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9 ]{10}'),
    ]),
  });

  userInfo() {
    this.createUser = new FormGroup({
      firstName: new FormControl(this.userData.firstname, Validators.required),
      lastName: new FormControl(this.userData.lastname, Validators.required),
      dob: new FormControl(this.userData.dob, Validators.required),
      gender: new FormControl(this.userData.gender, Validators.required),
      code: new FormControl(this.userData.code, Validators.required),
      mobile: new FormControl(this.userData.mobile, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
    });
  }

  onSubmit() {
    try {
      let data: any = {
        firstname: this.createUser.value.firstName,
        lastname: this.createUser.value.lastName,
        dob: this.createUser.value.dob,
        gender: this.createUser.value.gender,
        code: this.createUser.value.code,
        mobile: this.createUser.value.mobile,
      };

      if (this.createUser.valid) {
        this.http.request('post', '/users', data).subscribe((res: any) => {
          console.log('got DATA', res);
        });

        this.createUser.reset();
      } else {
        alert('Please Complete form details');
      }
    } catch (error) {}
  }

  getAllusers(id: any) {
    try {
      this.http.request('get', '/users/' + id, null).subscribe((res: any) => {
        this.userData = res;
        this.userInfo();
        console.log('data   : ', res);
      });
    } catch (error) {}
  }
  edituser() {
    let data: any = {
      firstname: this.createUser.value.firstName,
      lastname: this.createUser.value.lastName,
      dob: this.createUser.value.dob,
      gender: this.createUser.value.gender,
      code: this.createUser.value.code,
      mobile: this.createUser.value.mobile,
    };
    this.http
      .request('put', '/users/' + this.userID, data)
      .subscribe((res: any) => {
        console.log('got DATA', res);
      });
  }
}
