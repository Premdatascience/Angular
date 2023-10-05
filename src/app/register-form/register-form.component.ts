import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),

  });
  submitted = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private service: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required,],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  get f(): {
    [key: string]: AbstractControl
  } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let data = this.form.value

    this.service.ProcessRegister(data).subscribe((res:any )=> {
      if (res.status == "ok") {
        this.toastr.success("Registered is successfull", 'Success')
        this.router.navigate(['']);
      } else {
        alert("Duplicate Email");
      }
    })



  }
}

