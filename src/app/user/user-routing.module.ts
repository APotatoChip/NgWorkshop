import { RouterModule,Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes:Routes=[
{
    path:'user',
    canActivateChild:[
        AuthGuard
    ],
    children:[
        {
            path:'profile',
            component:ProfileComponent,
            data:{
                isLogged:true
            }
        },
        {
            path:'register',
            component:RegisterComponent,
            data:{
                isLogged:false
            }
        },
        {
            path:'login',
            component:LoginComponent,
            data:{
                isLogged:false
            }
        }
    ]
}
];

export const UserRoutingModule=RouterModule.forChild(routes);