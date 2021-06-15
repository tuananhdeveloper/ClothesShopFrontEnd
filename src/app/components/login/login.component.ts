import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { constants } from 'src/app/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = fb.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem(constants.USER_DATA) != null) {
      this.router.navigate(['/products']);
    }
  }

  login() {
    this.userService.login(this.form.value).subscribe(
      (response) => {
        if (response == "FAILURE") {
          alert("Đăng nhập thất bại");
        }
        else {
          alert("Đăng nhập thành công");
          localStorage.setItem(constants.USER_DATA, JSON.stringify(response));
          this.router.navigate(['/products']);
        }
      }
    );
  }
}
