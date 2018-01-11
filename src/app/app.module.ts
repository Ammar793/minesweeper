import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MinesweeperModule} from "./minesweeper/minesweeper.module";
import { RepeatPipe } from './core/repeat.pipe';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MinesweeperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
