import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MemoListeComponent } from './memo/memo-liste/memo-liste.component';
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "./shared/convert-to-space.pipe";
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { MemoDetailComponent } from './memo/memo-detail/memo-detail.component'
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { MemoDetailGuard } from "./memo/memo-detail/memo-detail.guard";

@NgModule({
    declarations: [
        AppComponent,
        MemoListeComponent,
        ConvertToSpacesPipe,
        StarComponent,
        MemoDetailComponent,
        WelcomeComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'memos', component: MemoListeComponent },
            { 
                path: 'memos/:id',
                canActivate: [MemoDetailGuard],
                component: MemoDetailComponent
            },
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch:'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])],
    bootstrap: [AppComponent]
})
export class AppModule {}