import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainConsole = 'Send a chat to begin.';
  updateConsole(message) {
    this.mainConsole += '\n' + message;
  }
}
