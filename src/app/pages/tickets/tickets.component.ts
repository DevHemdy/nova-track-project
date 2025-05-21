import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tickets',
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

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
}
