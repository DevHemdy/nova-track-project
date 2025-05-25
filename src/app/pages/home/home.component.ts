import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';




@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



    ngAfterViewInit(): void {
    const swiper = new Swiper('.mySwiper', {
      
      modules: [Navigation, Pagination, Autoplay],
      // Optional parameters
      loop: true,
      slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 2000,
    grabCursor: true,
      autoplay: {
        delay: 2500,
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        740: {
          slidesPerView: 3,
          spaceBetween: 40
        },
              // when window width is >= 640px
        940: {
          slidesPerView: 4,
          spaceBetween: 20
        }
        
      },

      
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });



  }


}
