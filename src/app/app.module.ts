import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { UserService } from './user.service';
import { storageServiceProvider } from './storage.service';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './theme.service';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeListComponent,
    AsideComponent,
    ThemeListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService,storageServiceProvider,ThemeService,PostService],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }