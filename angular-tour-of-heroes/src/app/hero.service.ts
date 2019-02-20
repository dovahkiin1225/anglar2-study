import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // };
  getHeroes(): Observable<Hero[]> {   //之前返回一个 Hero[]， 现在它返回的是 Observable<Hero[]>。
    return of(HEROES);
  }
  constructor() { }
}
