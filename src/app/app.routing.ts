import { Routes } from '@angular/router'

import { LayoutComponent } from './layouts/layout/layout.component'

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', component: LayoutComponent, children: [
            { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    }
]
