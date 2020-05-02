import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ComicService } from 'src/app/shared/services/comic/comic.service';

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
    private router: Router
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

  public onPrev() {
    this.router.navigate(['/viewer', '10002']);
  }

  public onNext() {
    this.router.navigate(['/viewer', '10004']);
  }

}
