import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MainPageComponent } from './main-page.component'
import { RouterModule, Routes } from '@angular/router'
import { ItemListModule } from '../../shared/components/item-list/item-list.module'

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
]

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ItemListModule,
  ],
  providers: [],
  bootstrap: [MainPageComponent],
})
export class MainPageModule {}
