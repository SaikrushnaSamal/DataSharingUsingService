import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataSharingService } from '../service/dataSharingService.service';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input-component.component.html',
  imports: [FormsModule, CommonModule],
})
export class AppInputComponent implements OnInit {
  data: string = '';
  fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];
  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.data = this.fruits[0].name;
    this.dataSharingService.currentMessage.subscribe(
      (message) => (this.data = message)
    );
  }

  updateData() {
    console.log('emit', this.data);
    this.dataSharingService.changeMessage(this.data);
  }

  onSelect(a: string) {
    console.log(this.data);
  }
}
