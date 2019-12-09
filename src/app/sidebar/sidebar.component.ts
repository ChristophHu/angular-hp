import { Component, OnInit } from '@angular/core'

// Interface
export interface RouteInfo {
    path: string
    title: string
    type: string
    icontype: string
}

// Routes
export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'fas fa-chart-line'
    },
    {
        path: '/project',
        title: 'Projekte',
        type: 'link',
        icontype: 'fas fa-project-diagram'
    }
]
@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
    public menuItems: any[]

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem)
    }
}
