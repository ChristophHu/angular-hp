import { Routes } from '@angular/router'

import { LayoutComponent } from './layouts/layout/layout.component'

export const AppRoutes: Routes = [
    // { path: '', component: LayoutComponent },
    { path: '', component: LayoutComponent, children: [
            { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    }
]
