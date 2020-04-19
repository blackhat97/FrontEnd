import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedMaterialModule } from './shared-material.module';
import {TranslateModule} from '@ngx-translate/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchComponent } from './components/header/search/search.component';
import { NavigationMainComponent } from './components/header/navigation-main/navigation-main.component';
import { DexieService } from './services/dexie.service';
import { ShareModalComponent } from './components/share-modal/share-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    ShareModalComponent,
    SharedMaterialModule,
    TranslateModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    SearchComponent,
    ShareModalComponent,
    NavigationMainComponent,
  ],
  entryComponents: [
    ShareModalComponent,
  ],
  providers: [
    DexieService
  ]
})

export class SharedModule {
}
