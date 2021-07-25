import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeService } from './theme.service';
import { ThemeRouterModule } from './theme-routing.module';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeComponent } from './theme/theme.component';
import { AsideComponent } from '../shared/aside/aside.component';


@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    DetailComponent,
    NewThemeComponent,
    ThemeComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRouterModule,
   
  ], 
  providers:[
ThemeService
  ],
  exports:[
    ThemeListComponent,
    ThemeListItemComponent,
    AsideComponent
  ]
})
export class ThemeModule { }
