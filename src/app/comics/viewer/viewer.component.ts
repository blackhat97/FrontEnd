import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ComicService } from 'src/app/shared/services/database/comic.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  id: number;
  loading: boolean;
  contents: any[];
  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService,

  ) { 
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getContents(this.id);
    });

  }

  ngOnInit() {
    this.loading = true;
  }

  getContents(param) {
    this.comicService.getEpisodeContents(param).subscribe(res => {
      this.contents = res.results;
      this.loading = false;
    });
  }

}
