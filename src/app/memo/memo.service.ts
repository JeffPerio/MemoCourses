import { Injectable } from '@angular/core';
import { InterfaceMemo } from '../memo-liste/interfaceMemo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor() { }

  getMemos():InterfaceMemo[] {
    return [
      {
        "memoId": 1,
        "memoTitre": "Efferalgan",
        "memoDate": "04/02/2023",
        "memoContenu": "3 boites effervescent + 1 gellule",
        "memoDivers": "YGCHGB-965",
        "memoPrix": 9.99,
        "memoStarRating": 4.8,
        "imageUrl": "assets/images/efferalgan.jpg"
      },
      {
        "memoId": 2,
        "memoTitre": "Chaises",
        "memoDate": "04/01/2023",
        "memoContenu": "4 chaises pour cuisine",
        "memoDivers": "DRFTUGHB-92",
        "memoPrix": 49.999,
        "memoStarRating": 4.2,
        "imageUrl": "assets/images/chaises.jpg"
      },
      {
        "memoId": 5,
        "memoTitre": "Marteau",
        "memoDate": "04/11/2023",
        "memoContenu": "Marteau pour clouer des trucs",
        "memoDivers": "POIIU-465",
        "memoPrix": 9.99,
        "memoStarRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },
      {
        "memoId": 8,
        "memoTitre": "Scie",
        "memoDate": "04/11/2023",
        "memoContenu": "Pour scier des trucs",
        "memoDivers": "DFRT-41",
        "memoPrix": 11.55,
        "memoStarRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "memoId": 10,
        "memoTitre": "Manette Xboite",
        "memoDate": "04/11/2023",
        "memoContenu": "Manette Xboite sans fil",
        "memoDivers": "DXCFGVBH-6454",
        "memoPrix": 49.99,
        "memoStarRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      }
    ]
  }
}
