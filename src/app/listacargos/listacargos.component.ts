import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacargos',
  templateUrl: './listacargos.component.html',
  styleUrls: ['./listacargos.component.css']
})
export class ListacargosComponent implements OnInit {

  listaCargos : Cargo[];
  constructor() { }

  ngOnInit() {
    this.listaCargos = [];
  }

  adicionaNuevo(cargo : Cargo){
    this.listaCargos.push(cargo);
  }

}
