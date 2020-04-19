import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language = 'en';

  menuItems: any[];
  progressBarMode: string;
  currentLang: string;
  public showSearch;

  constructor(
    private translateService: TranslateService,
    private storage: StorageMap
  ) { }

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
    this.loadMenus();
  }

  changeLanguage(language: string): void {
    this.translateService.use(language).subscribe(() => {
      this.language = language;
    });
  }

  private loadMenus(): void {
    this.menuItems = [
      {link: '/comics/weekly', name: 'weekly'},
      {link: '/comics/top', name: 'top'},
      {link: '/comics/genres', name: 'genres'}
    ];
  }

}
