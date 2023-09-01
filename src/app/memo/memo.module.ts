import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { MemoDetailComponent } from './memo-detail/memo-detail.component';
import { MemoListeComponent } from './memo-liste/memo-liste.component';
import { ConvertToSpacesPipe } from "../shared/convert-to-space.pipe";

import { MemoDetailGuard } from "./memo-detail/memo-detail.guard";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MemoListeComponent,
    MemoDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'memos', component: MemoListeComponent },
      { 
          path: 'memos/:id',
          canActivate: [MemoDetailGuard],
          component: MemoDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class MemoModule { }
