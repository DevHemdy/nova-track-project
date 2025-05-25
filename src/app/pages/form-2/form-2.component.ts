import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from "../calendar/calendar.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TimeSelectorComponent } from "../time-selector/time-selector.component";
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-form-2',
  imports: [CommonModule, RouterModule, CalendarComponent, ReactiveFormsModule, TimeSelectorComponent],
  templateUrl: './form-2.component.html',
  styleUrl: './form-2.component.scss'
})
export class Form2Component {

   formDate = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });


  constructor(private alert: AlertService){

  }

  onSubmit() {
  if (this.formDate.invalid) {
    console.log('Missing field:', this.formDate.value);
    this.alert.showError('Missing Field');
    setTimeout(() => {
    }, 3000);
    return;
  }
  const formDataValue2 = this.formDate.value;
  localStorage.setItem('userFormData', JSON.stringify(formDataValue2));

      this.alert.showAlertSuccess('Form Submitted');

}

}

