import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MemoListeComponent } from './memo-liste/memo-liste.component';
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "./shared/convert-to-space.pipe";

@NgModule({
    declarations: [AppComponent, MemoListeComponent, ConvertToSpacesPipe],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}