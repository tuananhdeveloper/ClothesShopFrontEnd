import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
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
  }

  register(): void {
    this.userService.register(this.form.value).subscribe(
      (response) => {
        if(response == "USER_ALREADY_EXISTS") {
          alert("Tài khoản đã tồn tại");
        }
        else {
          alert("Đăng ký thành công");
          this.router.navigate(['/']);
        }
      }
    );
  }
}
