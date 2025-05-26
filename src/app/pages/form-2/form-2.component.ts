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
    this.alert.showError('Missing Field');
    setTimeout(() => {
    }, 3000);
    return;
  }
 
 // Get Form1 data
  const form1DataRaw = localStorage.getItem('userFormData');
  const form1Data = form1DataRaw ? JSON.parse(form1DataRaw) : {};

  // Get Form2 data
  const form2Data = this.formDate.value;

  // Combine both
  const combinedData = {
    ...form1Data,
    ...form2Data,
  };

  // Save combined data
  localStorage.setItem('combinedFormData', JSON.stringify(combinedData));

  // Navigate or do something else
  console.log('Combined Data:', combinedData);

  this.alert.showAlertSuccess('Form Submitted');
  setTimeout(() => {
    window.location.href='/form-summary'
  }, 3000);

}



}

