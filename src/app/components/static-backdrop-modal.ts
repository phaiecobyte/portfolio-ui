import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';


declare var bootstrap:any;

@Component({
  selector: 'app-modal',
  imports: [],
  template: `
    <div #modalElement class="modal fade" id={{id}} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">{{title}}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <button type="button" class={{classBtnClose}} data-bs-dismiss="modal">{{txtBtnClose}}</button>
            <button type="button" class={{classbtnSave}} (click)="onSaveClick()" >{{txtBtnSave}}</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class StaticBackDropModal {
  @Input() id="";
  @Input() txtBtnOpenModal = "Open Modal";
  @Input() icon = "";
  @Input() title = "Modal Title";
  @Input() txtBtnClose = "Close";
  @Input() txtBtnSave = "Save";
  @Input() classBtnClose = "btn btn-secondary";
  @Input() classbtnSave ="btn btn-primary";

  @ViewChild('modalElement') modalElementRef!:ElementRef;
  @Output() saveClicked = new EventEmitter<void>();
  
  onSaveClick=()=>this.saveClicked.emit();

  open = () => {
    const modalEl = document.getElementById(this.id);
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    modalInstance?.show();
  }
  
  close = () => {
    const modalEl = document.getElementById(this.id);
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    modalInstance?.hide();
  }

}