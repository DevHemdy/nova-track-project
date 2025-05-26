import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

closeMobileMenu() {
  const mobileMenu = document.querySelector('[data-x="mobile-menu"]');
  mobileMenu?.classList.remove('is-menu-active'); // or whatever class your system uses to show the menu
  document.documentElement.classList.remove('is-menu-opened');
}
  
}
