import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // };
  getHeroes(): Observable<Hero[]> {   //之前返回一个 Hero[]， 现在它返回的是 Observable<Hero[]>。
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  // constructor() { }
  // 把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中。
  constructor(private messageService: MessageService) { }
}
