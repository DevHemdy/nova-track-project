import { Component } from '@angular/core';

@Component({
  selector: 'app-form-summary',
  imports: [],
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
