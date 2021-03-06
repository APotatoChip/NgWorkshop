import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { storageServiceProvider } from './storage.service';
import { RouterModule } from '@angular/router';
import { PostService } from './post.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    storageServiceProvider,
    PostService,
    AuthGuard
 
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
