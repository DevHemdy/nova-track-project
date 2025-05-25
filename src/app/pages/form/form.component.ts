import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

formData: FormGroup = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  phone: new FormControl(''),
  company: new FormControl(''),
  industry: new FormControl('', Validators.required),
  fleetSize: new FormControl('', Validators.required)
});

onSubmit() {
  if (this.formData.invalid) {
    console.log('Missing field:', this.formData.value);
    this.alert.showError('Missing Field');
    setTimeout(() => {
    }, 3000);
    return;
  }
  const formDataValue = this.formData.value;
  localStorage.setItem('userFormData', JSON.stringify(formDataValue));

  // Proceed to next step
  window.location.href = '/form-2';
}


  constructor(private alert: AlertService){

  }


  



}
