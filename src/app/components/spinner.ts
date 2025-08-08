import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-spinner',
  imports: [],
  template: `
    <div class="text-center">
        <div class="spinner-border text-success mb-3" role="status" style="width: 3rem; height: 3rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="text-center text-muted">
            <p class="mb-0">{{title}}</p>
            <small>{{message}}</small>
        </div>
    </div>
  `,
})
export class SpinnerComponent {
    @Input() title='Fetching data from server...';
    @Input() message='This may take up to 1 minute due to free server cold start. Thank you for your patience.'
}