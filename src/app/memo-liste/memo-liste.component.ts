import { Component, OnInit } from '@angular/core';
import { InterfaceMemo } from './interfaceMemo';

@Component({
  selector: 'app-memo-liste',
  templateUrl: './memo-liste.component.html',
  styleUrls: ['./memo-liste.component.css']
})
export class MemoListeComponent implements OnInit {

  pageTitle: string = 'Mémo Liste';
  imageLargeur: number = 50;
  imageMarge: number = 2;
  showImage: boolean = false;

  private _filtreListe: string = '';

  /**
   * Custom Get et Set pour le filtre e la liste
   */
  get filtreListe(): string{
    return this._filtreListe;
  }
  set filtreListe(value: string){
    this._filtreListe = value;
    this.memosFiltres = this.performFilter(value);
  }

  /**
   * Méthode filtrer la liste
   */
  performFilter(filtrePar: string): InterfaceMemo[]{
    //Conversion du filtre en lowercase pour s'assurer que le filtre ne tient pas compte de la casse
    filtrePar = filtrePar.toLowerCase();
    //Filtre la liste originale des memos par le nom passé en paramètre, conversion du titre en lowercase pour filtrer sans tenir compte de la casse
    return this.memos.filter((memoTmp : InterfaceMemo) => memoTmp.memoTitre.toLowerCase().includes(filtrePar));
  }

  /**
   * Méthode pour changer l'affichage des images de vrai a faux
   */
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  /**
   * Méthode pour initialiser le filtre
   */
  ngOnInit(): void {
    //Appel au setter du filtre
    this.filtreListe = 'Effer';
  }

  /**
   * Méthode de l'action lors du click sur le composant étoile
   * @param message message transmis par le composant Star
   */
  onImportanceClicked(message : string): void {
    this.pageTitle = 'Mémo Liste : ' + message;
  }
  memosFiltres: InterfaceMemo[] = [];

  memos: InterfaceMemo[] = [
    {
      "memoId": 1,
      "memoTitre": "Efferalgan",
      "memoDate": "04/02/2023",
      "memoContenu": "3 boites effervescent + 1 gellule",
      "memoDivers": "AHGX-45",
      "memoPrix": 9.99,
      "memoStarRating": 4.8,
      "imageUrl": "assets/images/efferalgan.jpg"
    },
    {
      "memoId": 2,
      "memoTitre": "Chaises",
      "memoDate": "04/01/2023",
      "memoContenu": "4 chaises pour cuisine",
      "memoDivers": "OIPGUY-65",
      "memoPrix": 49.999,
      "memoStarRating": 4.2,
      "imageUrl": "assets/images/chaises.jpg"
    }
  ]
}
