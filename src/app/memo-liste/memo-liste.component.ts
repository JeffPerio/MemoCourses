import { Component } from '@angular/core';

@Component({
  selector: 'app-memo-liste',
  templateUrl: './memo-liste.component.html',
  styleUrls: ['./memo-liste.component.css']
})
export class MemoListeComponent {
  pageTitle: string = 'Mémo Liste';
  imageLargeur: number = 50;
  imageMarge: number = 2;
  showImage: boolean = false;
  filtreListe: string = '';

  /**
   * Méthode pour changer l'affichage des images de vrai a faux
   */
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  memos: any[] = [
    {
      "memoId": 1,
      "memoTitre": "Efferalgan",
      "memoDate": "04/02/2023",
      "memoContenu": "3 boites effervescent + 1 gellule",
      "memoDivers": "Parapharmacie gallerie carrefour Tournefeuille",
      "memoPrix": 9.99,
      "memoStarRating": 4.8,
      "imageUrl": "assets/images/efferalgan.jpg"
    },
    {
      "memoId": 2,
      "memoTitre": "Chaises",
      "memoDate": "04/01/2023",
      "memoContenu": "4 chaises pour cuisine",
      "memoDivers": "IKEA ou Conforama",
      "memoPrix": 49.999,
      "memoStarRating": 4.2,
      "imageUrl": "assets/images/chaises.jpg"
    }
  ]
}
