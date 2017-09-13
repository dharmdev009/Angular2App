import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service'; 

@Component({
  selector:'dashboard-component',
  templateUrl:'./dashboard.component.html',
})

export class DashBoardComponent implements OnInit {
  heroes:Hero[];
  constructor(private heroService:HeroService){

  }

  ngOnInit():void{
    this.heroService.getHeroes().then(a=>this.heroes=a.slice(1,5));
  }

  showtheValue:string = 'Dharm Dev sharma';
}