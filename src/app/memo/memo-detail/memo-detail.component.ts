import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './memo-detail.component.html',
  styleUrls: ['./memo-detail.component.css']
})
export class MemoDetailComponent implements OnInit{

  pageTitle:string = 'Memo Detail Title'

  constructor() {}

  ngOnInit(): void {
  }


}
