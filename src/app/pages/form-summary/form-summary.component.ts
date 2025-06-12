import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-summary',
  imports: [CommonModule, RouterModule],
  templateUrl: './form-summary.component.html',
  styleUrl: './form-summary.component.scss'
})
export class FormSummaryComponent {
allData: any;


  ngOnInit(): void {
     const storedData = localStorage.getItem('combinedFormData');
  if (storedData) {
    this.allData = JSON.parse(storedData);    
    console.log(this.allData)
  }
}

}
