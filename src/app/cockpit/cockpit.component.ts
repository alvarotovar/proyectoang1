import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  newServerName = "";
  newServerContent = "";
  @Output() serverCreated = new EventEmitter<{name : String, content : String}>();
  @Output() blueprintCreated = new EventEmitter<{name : String, content : String}>();
  constructor() { }

  ngOnInit() {
  }

  
  onAddServer(){
    this.serverCreated.emit({name : this.newServerName, 
        content : this.newServerContent});
    
    /*this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

  onAddBluePrint(){
    this.blueprintCreated.emit({name : this.newServerName, content : this.newServerContent});
    /*this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent

    });*/
  }
}
