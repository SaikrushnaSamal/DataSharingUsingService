import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output',
  templateUrl: './output-component.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class AppOutputComponent {
  @Input() name: any;
  @Output() data = new EventEmitter<any>();

  passData() {
    console.log('emit', this.name);
    this.data.emit(this.name);
  }
}
