import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router, NavigationEnd } from '@angular/router';
import { ComicService } from 'src/app/shared/services/comic/comic.service';
import { ComicViewerModel } from 'src/app/shared/models/comic-viewer.model';
import { CommentListConfig } from 'src/app/shared/models/comment-list-config.model';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  navigationSubscription: any;

  id: number;
  loading: boolean;
  content: ComicViewerModel;
  listConfig: CommentListConfig = {
    id: 0,
  };

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
    this.listConfig = {id: this.id};
  }


  getContents(param) {
    this.comicService.getEpisodeContents(param).subscribe(res => {
      this.content = res;
      this.loading = false;
    });
  }

  public onPrev() {
    if (this.content.prev_id == 0) {
      alert('No previous episode');
      return;
    }
    window.scroll(0,0);
    this.router.navigate(['/viewer', this.content.prev_id]);
  }

  public onNext() {
    if (this.content.next_id == 0) {
      alert('No previous episode');
      return;
    }
    window.scroll(0,0);
    this.router.navigate(['/viewer', this.content.next_id]);
  }

}
