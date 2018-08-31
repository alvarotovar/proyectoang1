import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Cargo } from '../Cargo';
@Component({
  selector: 'app-crear-cargo',
  templateUrl: './crear-cargo.component.html',
  styleUrls: ['./crear-cargo.component.css']
})
export class CrearCargoComponent implements OnInit {

  cargo : Cargo;
  @Output() emitirCargo : EventEmitter<Cargo>;
  constructor() {
      
   }

  ngOnInit() {
    this.cargo = new Cargo();
    this.emitirCargo = new EventEmitter<Cargo>();
  }

  emite(){
    emitirCargo.emit(this.cargo);
  }

}
