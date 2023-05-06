import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataSharingService } from '../service/dataSharingService.service';

@Component({
  selector: 'app-output',
  templateUrl: './output-component.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class AppOutputComponent implements OnInit {
  data: string = '';
  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.dataSharingService.currentMessage.subscribe(
      (message) => (this.data = message)
    );
  }

  updateData() {
    console.log('emit', this.data);
    this.dataSharingService.changeMessage(this.data);
  }
}
