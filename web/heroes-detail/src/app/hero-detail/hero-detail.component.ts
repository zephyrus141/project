import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroesDetail();
  }

  getHeroesDetail(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.heroService.getHeroesDetail(id)
      .subscribe((resp) =>{
        console.log(resp)
        this.hero = resp;

      });
  }
 save(){
  this.heroService.edithero(this.hero.id,this.hero).subscribe()
 }
 deleted(id:number){
  this.heroService.deletedhero(id).subscribe()
 }

  goBack(): void {
    this.location.back();
  }
}