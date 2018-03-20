import { Component, OnInit, ViewChild } from '@angular/core';

import { ActualiteService } from '../actualite.service';
import { IActualite } from './mock-actualite';

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers : [ ActualiteService ]
})
export class NewsComponent implements OnInit {
  errorMessage: string;
  newsList: IActualite[] = [];
  selectNews: IActualite;
  constructor( private _actualiteService: ActualiteService) { }
@ViewChild('news') public newsModal;

  onSelect(news: IActualite) {
    console.log(news);
    this.selectNews = news;
    this.newsModal.show(news);
  }
  ngOnInit(): void {
    this._actualiteService.getArticle()
    .subscribe( newsList => {
      this.newsList = newsList;
    }, error => this.errorMessage = <any>error);
  }

}
