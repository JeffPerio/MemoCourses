import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterfaceMemo } from '../memo-liste/interfaceMemo';

@Component({
  templateUrl: './memo-detail.component.html',
  styleUrls: ['./memo-detail.component.css']
})
export class MemoDetailComponent implements OnInit{

  pageTitle:string = 'Memo Detail'
  memo: InterfaceMemo | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` : ${id}`;
    this.memo = {
      "memoId": 1,
      "memoTitre": "Efferalgan",
      "memoDate": "04/02/2023",
      "memoContenu": "3 boites effervescent + 1 gellule",
      "memoDivers": "YGCHGB-965",
      "memoPrix": 9.99,
      "memoStarRating": 4.8,
      "imageUrl": "assets/images/efferalgan.jpg"
    }
  }

  onBack(): void {
    this.router.navigate(['/memos']);
  }

}
