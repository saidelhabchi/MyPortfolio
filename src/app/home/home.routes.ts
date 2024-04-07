import { Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { WorkComponent } from "./work/work.component";
import { ProfileComponent } from "./profile/profile.component";
import { ContactComponent } from "./contact/contact.component";

export const routes : Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        component: LandingComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'work',
        component: WorkComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
]