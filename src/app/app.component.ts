import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './shared/services/storage/storage.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'webcomics';
  mobileQuery: MediaQueryList;
  lang: string;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private snackbar: MatSnackBar,
    private storageService: StorageService,
    public translateService: TranslateService,
    private deviceService: DeviceDetectorService
  ) {
      this.epicFunction();

      this.mobileQuery = media.matchMedia('(max-width: 731px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.translateService.setDefaultLang('en-US');
  }

  ngOnInit() {
    this.lang = this.storageService.read('language');
    !this.lang ? this.storageService.save('language', 'en-US') : this.lang = this.lang;
    this.translateService.use(this.lang);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  scrollTop() {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }

  epicFunction() {
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    
    if(isMobile || isTablet) {
      console.log('isMobile');
    }
  }

}
