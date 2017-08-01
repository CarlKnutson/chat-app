import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ResponseService]
})

export class ChatComponent implements OnInit {
  errorMessage: any;
  message = '';
  responses= [];
  jsonObject: any;

  @Input() console: string;
  @Input() name: string;
  @Output() mainConsole: EventEmitter<any> = new EventEmitter<any>();

  constructor(private responseService: ResponseService) { }

  sendMessage() {
    this.mainConsole.emit(this.name + ':  ' + this.message);
  }

  enterResponse(aString) {
    this.mainConsole.emit(this.name + ':  ' + aString);
  }

  ngOnInit() {
    this.responseService.getResponses()
          .subscribe(responses => this.responses = responses);

  }
}
