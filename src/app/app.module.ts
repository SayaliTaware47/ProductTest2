import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent, // Import the standalone component here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}

