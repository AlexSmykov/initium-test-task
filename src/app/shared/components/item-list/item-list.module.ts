import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ItemListComponent } from './item-list.component'

@NgModule({
  declarations: [ItemListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [ItemListComponent],
  exports: [ItemListComponent],
})
export class ItemListModule {}
