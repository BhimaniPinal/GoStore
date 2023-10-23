import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
})
export class DialogFormComponent {
  @Input() title: string = '';
  @Input() bodyContent!: Element;

  ngOnInit() {
    console.log(this.title);
    this.title = this.title;
  }
}
