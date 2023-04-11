import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  /**
   * Récepteur de la valeur du parent (bind dans le html)
   */
  @Input() importance: number = 0;
  cropWidth: number = 75;
  /**
   * Emetteur vers le parent
   */
  @Output() importanceClicked: EventEmitter<string> = 
    new EventEmitter<string>();
  
  /**
   * Méthode au clique sur les étoiles
   */
  onClick():void {
    this.importanceClicked.emit(`L'importance ${this.importance} a été cliquée`);
  }

  /**
   * Recalcul de la valeur de largeur du composant
   */
  ngOnChanges(): void {
    this.cropWidth = this.importance * 75/5;
  }
}
