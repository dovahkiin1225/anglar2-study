import { Component, OnInit, Input } from '@angular/core';     //导入 Input 符号。
import { Hero } from '../hero';       //导入 Hero 符号

import { ActivatedRoute } from '@angular/router';     //保存着到这个 HeroDetailComponent 实例的路由信息
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;      //添加一个带有 @Input() 装饰器的 hero 属性。
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
