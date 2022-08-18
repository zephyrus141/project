import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'https://62fb0272ffd7197707f4dd7b.mockapi.io/api/v1/Heroes' })
};

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'https://62fb0272ffd7197707f4dd7b.mockapi.io/api/v1/Heroes'; 

  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = this.httpClient.get<Hero[]>("https://62fb0272ffd7197707f4dd7b.mockapi.io/api/v1/Heroes")
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHeroesDetail(id: number): Observable<Hero> {
    const heroes = this.httpClient.get<Hero>("https://62fb0272ffd7197707f4dd7b.mockapi.io/api/v1/Heroes/"+ id)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
 addhero(data :any){
  return this.httpClient.post(this.heroesUrl,data)
 }
deletedhero(id :number){
  return this.httpClient.delete(`${this.heroesUrl}/${id}`)
}
edithero(id:number, hero:any){
  return this.httpClient.put(`${this.heroesUrl}/${id}`,hero)
}


}