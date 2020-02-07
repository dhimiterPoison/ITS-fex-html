import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-its-panel',
  templateUrl: './its-panel.component.html',
  styleUrls: ['./its-panel.component.css']
})
export class ItsPanelComponent implements OnInit {

  @Input()
  text: string = "";

  @Output()
  deleting = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete = () => {
    this.deleting.emit();
  }

}
