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
import { UserService } from './services/user.service';
import { JwtService } from './services/jwt.service';
import { ApiService } from './services/api.service';
import { CommentPreviewComponent, CommentListComponent } from './components/comment-helpers';
import { ModalModule } from './_modal';
import { CommentsService } from './services/comment.service';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule,
    TranslateModule,
    ModalModule,
  ],
  exports: [
    CommentListComponent,
    CommentPreviewComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    ShareModalComponent,
    FavoriteButtonComponent,
    SharedMaterialModule,
    TranslateModule,
    ModalModule,
  ],
  declarations: [
    CommentListComponent,
    CommentPreviewComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    SearchComponent,
    ShareModalComponent,
    NavigationMainComponent,
    FavoriteButtonComponent,
  ],
  entryComponents: [
    ShareModalComponent,
  ],
  providers: [
    DexieService,
    ApiService,
    UserService,
    JwtService,
    CommentsService,
  ]
})

export class SharedModule {
}
