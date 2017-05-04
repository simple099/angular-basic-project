import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule ({
        imports: [
            BrowserModule
        ],
        declarations: [
            AppComponent
        ],  
        bootstrap: [
            AppComponent
        ]
})

export class AppModule{

}