import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchComponent } from './components/header/search/search.component';
import { NavigationMainComponent } from './components/header/navigation-main/navigation-main.component';
import { DexieService } from './services/dexie.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    SearchComponent,
    NavigationMainComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    MaterialModule,
    TranslateModule,
  ],
  providers: [
    DexieService
  ]
})

export class SharedModule {
}
