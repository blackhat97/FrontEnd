import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ComicModel } from 'src/app/shared/models/comic.model';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent {
  @Input() title: string | number;
  @Input() comics: ComicModel[];
  @Input() lang: string;
  constructor(
    private translateService: TranslateService

  ) { }


}
