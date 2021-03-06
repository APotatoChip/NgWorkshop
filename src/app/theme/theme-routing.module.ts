import {Routes,RouterModule, Router} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes:Routes=[
{
    path:'theme',
    pathMatch:'full',
    redirectTo:'theme/list'
},
{
    path:'theme/list',
    component:ThemeListComponent
},
{
    path:'theme/detail/:id',
    component:DetailComponent
},{
    path:'theme/new',
    component:NewThemeComponent
}

];

export const ThemeRouterModule=RouterModule.forChild(routes);