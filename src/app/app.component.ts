import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photo-app';
  sampleMessage = 'This right here is a sample message!';

  sampleMethod() {
    console.log('This right here is a message from your sample method!');
  }
}
