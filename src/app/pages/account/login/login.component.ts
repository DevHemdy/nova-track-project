import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })


    ngOnInit(): void {
    window.scrollTo(0,0)
  }



    constructor(private alert: AlertService){}
  onSubmit(){
   if(this.loginForm.invalid){
    this.alert.showError('Wrong Email or Password')
   }
   else{
     this.alert.showAlertSuccess('Login Successful')
    console.log(this.loginForm.value)
    setTimeout(() => {
      window.location.href='/'
    }, 3000);
   }
  }
}
