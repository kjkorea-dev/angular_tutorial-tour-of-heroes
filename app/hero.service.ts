import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // wait 2 seconds
  getHeroSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)
           ).then(() => this.getHeroes());
  }
}