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

  constructor(private alert: AlertService){}
  
onSubmit() {
  if (this.formData.invalid) {
    this.alert.showError('Missing Field');
    setTimeout(() => {
    }, 2000);
    return;
  }
  const formDataValue = this.formData.value;
  localStorage.setItem('userFormData', JSON.stringify(formDataValue));

  // Proceed to next step
  window.location.href = '/form-2';
}





  



}
