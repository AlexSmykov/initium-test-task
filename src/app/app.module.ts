import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { EPartialRoutes } from './shared/routing-paths'

const routes: Routes = [
  {
    path: '',
    redirectTo: EPartialRoutes.MAIN,
    pathMatch: 'full',
  },
  {
    path: EPartialRoutes.MAIN,
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
