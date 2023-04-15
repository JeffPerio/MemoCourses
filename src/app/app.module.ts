import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MemoListeComponent } from './memo-liste/memo-liste.component';
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "./shared/convert-to-space.pipe";
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [AppComponent, MemoListeComponent, ConvertToSpacesPipe, StarComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {}