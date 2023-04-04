import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MemoListeComponent } from './memo-liste/memo-liste.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, MemoListeComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}