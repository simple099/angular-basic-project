import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent{
    names: string[];
    
    constructor(){
    this.names = ['Sasha', 'Max', 'Sveta', 'Ann'];
    }
}