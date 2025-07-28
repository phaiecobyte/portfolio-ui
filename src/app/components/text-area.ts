import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  imports: [],
  template: `
    <div class="form-floating">
      <textarea class="form-control" 
        placeholder="Leave a comment here" 
        id="floatingTextarea">
        [formControl]="inputControl"
      </textarea>
      <label for="floatingTextarea">{{label}}</label>
</div>
  `,
  styles: ``
})
export class TextArea {
  @Input() label:string='comment'
}
