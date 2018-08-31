import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoang1';
  serverElements = [];


  onServerAdded(serverDate : {name : String, content : String}){
    this.serverElements.push({
      name : serverDate.name,
      type :'server',
      content : serverDate.content
    });  
  }

  onBluePrintAdded(serverDate : {name : String, content : String}){
    this.serverElements.push({
      name : serverDate.name,
      type :'blueprint',
      content : serverDate.content
    });  
  }

}
