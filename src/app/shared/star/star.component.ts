import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() importance: number = 0;
  cropWidth: number = 75;
  @Output() importanceClicked: EventEmitter<string> = 
    new EventEmitter<string>();
  

  onClick():void {
    this.importanceClicked.emit(`L'importance ${this.importance} a été cliquée`);
  }

  ngOnChanges(): void {
    this.cropWidth = this.importance * 75/5;
  }
}
