import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ToastrModule } from 'ngx-toastr';
import { FormComponent } from './crud-form/form/form.component';
import { MaterialModelComponent } from './material-model/material-model.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SidenavbarComponent,
    FormComponent,
    MaterialModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
