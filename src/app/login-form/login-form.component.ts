import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userform: FormGroup;
  submitted = false;
  private token: string | null = null;
  private isAuthenticated = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
   
   
    this.userform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.userform.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.userform.invalid) {
      return;
    }

    const data = this.userform.value;
    this.service.Login(data).subscribe((res: any) => {
      if (res.status === 'ok') {
        this.isAuthenticated = true;
        this.token = res.token;
        localStorage.setItem('token', res.token);
        localStorage.setItem('Roleid', res.role);
        this.toastr.success('Login successful', 'Success');
        this.router.navigate(['home']);

      } else {
        alert(res.status);
      }
    });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token'); // Clear token from storage
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

}
