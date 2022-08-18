import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styleUrls: ['./add-heroes.component.css']
})
export class AddHeroesComponent implements OnInit {
  hero:any= {
    name:" ",
  };
  constructor(private heroser:HeroService) { }

  ngOnInit(): void {
  }
 add(){
  this.heroser.addhero(this.hero).subscribe()
 }
}