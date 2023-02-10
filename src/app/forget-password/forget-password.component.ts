import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupResetpwdComponent } from '../popup-resetpwd/popup-resetpwd.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private ngbModal: NgbModal) {
  }

  public openModal() {
    this.ngbModal.open(PopupResetpwdComponent);
  }
}
