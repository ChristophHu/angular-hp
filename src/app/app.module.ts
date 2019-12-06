import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { LayoutComponent } from './layouts/layout/layout.component'

import { AppRoutes } from './app.routing'
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
