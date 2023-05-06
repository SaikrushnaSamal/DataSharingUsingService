import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input-component.component.html',
  imports: [FormsModule],
})
export class AppInputComponent {
  @Input() name: any;
  @Output() data = new EventEmitter<any>();

  passData() {
    console.log('emit', this.name);
    this.data.emit(this.name);
  }
}
