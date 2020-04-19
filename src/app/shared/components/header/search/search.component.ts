import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime ,  distinctUntilChanged ,  filter ,  switchMap } from 'rxjs/operators';
import { ComicService } from 'src/app/shared/services/database/comic.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: any[];
  term$ = new Subject<string>();
  @Input() showSearch: boolean;
  @Output() onHideSearch = new EventEmitter<boolean>();

  constructor(private comicService: ComicService) {}

  ngOnInit() {
    this.term$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter((term) => term.length > 0)
      )
  }


  public onSearchInput(event) {
    let term = event.target.value;
    if (term.length > 0) {
      term = term.charAt(0).toUpperCase() + term.slice(1);
      this.term$.next(term);
    } else {
      this.products = [];
      this.term$.next('');
    }
  }

  public onCloseSearch() {
    this.showSearch = false;
    this.onHideSearch.emit(false);
  }
}
