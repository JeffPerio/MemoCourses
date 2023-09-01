import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { MemoModule } from './memo/memo.module';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch:'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ]),
        MemoModule],
    bootstrap: [AppComponent]
})
export class AppModule {}