import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterfaceMemo } from '../memo-liste/interfaceMemo';
import { MemoService } from '../memo-service/memo.service';

@Component({
  templateUrl: './memo-detail.component.html',
  styleUrls: ['./memo-detail.component.css']
})
export class MemoDetailComponent implements OnInit{

  pageTitle:string = 'Memo Detail'
  memo: InterfaceMemo | undefined;
  //Message d'erreur
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private memoService : MemoService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id) { this.getMemo(id); }
  }

  getMemo(id: number): void {
    this.memoService.getMemo(id).subscribe({
      next: memo => this.memo = memo,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/memos']);
  }

}
