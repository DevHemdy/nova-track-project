import { Injectable } from '@angular/core';
import Swal  from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }



  showAlertSuccess(text:any){
    Swal.fire({
      text: text,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,

    });
  }

    showError(text:any){
    Swal.fire({
      text: text,
      icon: "error",
      showConfirmButton: false,
      timer: 2000,

    });
  }

}
