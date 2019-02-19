import { Component, OnInit, Input } from '@angular/core';     //导入 Input 符号。
import { Hero } from '../hero';       //导入 Hero 符号

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;      //添加一个带有 @Input() 装饰器的 hero 属性。
  constructor() { }

  ngOnInit() {
  }

}
