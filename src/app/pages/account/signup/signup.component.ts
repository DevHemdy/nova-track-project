import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  regForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    terms: new FormControl(true, Validators.required)
  })

  constructor(private alert: AlertService){

  }

  onSubmit(){
   if(this.regForm.invalid){
    this.alert.showError('Missing Field')
   }
   else{
     this.alert.showAlertSuccess('Confirmation mail sent')
    console.log(this.regForm.value)
    setTimeout(() => {
      window.location.href='/login'
    }, 3000);
   }
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
