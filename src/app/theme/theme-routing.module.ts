import {Routes,RouterModule, Router} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes:Routes=[
{
    path:'theme',
    redirectTo:'theme/list'
},
{
    path:'theme/list',
    component:ThemeListComponent
},
{
    path:'theme/detail/:id',
    component:DetailComponent
}
];

export const ThemeRouterModule=RouterModule.forChild(routes);