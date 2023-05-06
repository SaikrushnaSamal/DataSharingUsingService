import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppInputComponent } from './input-component/input-component.component';
import { AppOutputComponent } from './output-component/output-component.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppInputComponent, AppOutputComponent, FormsModule],
  templateUrl: './app-component.html',
})
export class App {
  name = 'Angular';
  addItem(event: any) {
    console.log('received', event);
    this.name = event;
  }
}

bootstrapApplication(App);
