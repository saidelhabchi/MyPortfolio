import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './home/landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'error-404',
        pathMatch: 'full',
        component: NotFoundComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo : "error-404"
    }
];
