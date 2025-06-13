import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-tickets',
  imports: [CommonModule, RouterModule, FormComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent implements OnInit{

    showPopup = false;

   advanceTool: any = [
 
        {
      id: 1,
      icon: "assets/icons/black-1.png",
      title: "Address",
      text: "11-12 Ibiyinka Olorunbe Close, off Amodu Ojikutu Street, Lagos, Nigeria"
    },
        {
      id: 1,
      icon: "assets/icons/black-2.png",
      title: "Phone",
      text: "+234 703 444 6666"
    },
        {
      id: 1,
      icon: "assets/icons/black-3.png",
      title: "Email",
      text: "info@novatrack.com"
    },
        {
      id: 1,
      icon: "assets/icons/black-4.png",
      title: "Support Hours",
      text: "Monday – Friday: 8:00 AM – 6:00 PM (WAT)"
    }

  ]

    ngOnInit(): void {
    window.scrollTo(0,0)
    
  }
}
