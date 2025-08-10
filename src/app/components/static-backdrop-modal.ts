import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SpinnerComponent } from "./spinner";


declare var bootstrap:any;

@Component({
  selector: 'app-modal',
  imports: [CommonModule, SpinnerComponent],
  template: `
    <div #modalElement class="modal fade" [id]="id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class={{classModal}}>
    <div class="modal-content position-relative">

      <!-- Spinner Overlay -->
      <div *ngIf="isLoading" class="modal-loading-overlay d-flex justify-content-center align-items-center">
        <app-spinner/>
      </div>

      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{title}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" [disabled]="isLoading"></button>
      </div>

      <div class="modal-body" [class.blur]="isLoading">
        <ng-content></ng-content>
      </div>

      <div class="modal-footer" [class.blur]="isLoading">
        <button type="button" class="{{classBtnClose}}" data-bs-dismiss="modal" [disabled]="isLoading">
          {{txtBtnClose}}
        </button>
        <button type="button" class="{{classbtnSave}}" (click)="onSaveClick()" [disabled]="isLoading">
          <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {{isLoading ? 'Saving...' : txtBtnSave}}
        </button>
      </div>

    </div>
  </div>
</div>
  `,
  styles: [`
  .modal-loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1051;
  }

  .blur {
    filter: blur(2px);
    pointer-events: none;
    user-select: none;
  }
`]

})
export class StaticBackDropModal {
  @Input() classModal = "modal-dialog modal-dialog-centered modal-lg"
  @Input() isLoading = false;
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