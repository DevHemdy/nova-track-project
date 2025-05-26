import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit{

    resetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
    ngOnInit(): void {
    window.scrollTo(0,0)
  }


      constructor(private alert: AlertService){}


    onSubmit(){
     if(this.resetForm.invalid){
      this.alert.showError('Please enter a registered email address')
     }
     else{
       this.alert.showAlertSuccess('Reset Link sent!')
      console.log(this.resetForm.value)
      setTimeout(() => {
        window.location.href='/login'
      }, 3000);
     }
    }
}
