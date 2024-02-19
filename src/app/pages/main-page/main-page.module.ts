import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MainPageComponent } from './main-page.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
]

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [MainPageComponent],
})
export class MainPageModule {}
