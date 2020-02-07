import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-insert',
  templateUrl: './text-insert.component.html',
  styleUrls: ['./text-insert.component.css']
})
export class TextInsertComponent implements OnInit {

  @Output()
  adding = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  add = (text: string) => {
    if (text) {
      this.adding.emit(text);
    }
  }
}
