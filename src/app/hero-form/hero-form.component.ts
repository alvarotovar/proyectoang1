import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  model : Hero = new Hero();

  constructor() { }

  ngOnInit() {
  }

  clear(){
    this.model = new Hero();
  }
}
