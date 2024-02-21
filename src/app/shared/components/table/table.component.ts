import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { Observable, take } from 'rxjs'
import { FormControl, NonNullableFormBuilder } from '@angular/forms'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { CheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component'
import {
  TSortConfigs,
  TTableHeaderConfig,
  TTableItem,
} from 'src/app/shared/components/table/table.interface'
import { ESortState } from 'src/app/shared/components/table/table.enum'

@UntilDestroy()
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T extends TTableItem> implements OnInit {
  @Input({ required: true }) items!: Observable<T[] | null>
  @Input({ required: true }) configs!: TTableHeaderConfig[]

  @Output() create = new EventEmitter<void>()
  @Output() delete = new EventEmitter<number[]>()
  @Output() sortChange = new EventEmitter<TSortConfigs>()
  @Output() itemClicked = new EventEmitter<T>()

  @ViewChild('allCheckboxComponent')
  allCheckboxComponent?: CheckboxComponent

  allCheckboxControl = this.fb.control<boolean>(false)
  checkboxFormArray = this.fb.array<FormControl<boolean>>([])

  currentSortState: TSortConfigs = {
    field: null,
    state: ESortState.DEFAULT,
  }

  ESortState = ESortState

  anyItemSelected = false

  get itemsWidthInPercent(): number {
    return this.configs
      .map((config) => config.sizeInPercent)
      .reduce((acc, size) => {
        return acc + size
      })
  }

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.subOnItems()
    this.subOnAllCheckboxControl()
    this.subOnCheckboxFormArray()
  }

  subOnItems(): void {
    this.items.pipe(untilDestroyed(this)).subscribe((result) => {
      this.checkboxFormArray.clear()
      if (result) {
        result.forEach(() => {
          this.checkboxFormArray.push(this.fb.control<boolean>(false))
        })
      }
    })
  }

  subOnAllCheckboxControl(): void {
    this.allCheckboxControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((changes) => {
        this.anyItemSelected = changes
        this.checkboxFormArray.patchValue(
          Array(this.checkboxFormArray.length).fill(changes),
          { emitEvent: false }
        )
      })
  }

  subOnCheckboxFormArray(): void {
    this.checkboxFormArray.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((changes) => {
        if (changes.every((value) => !value)) {
          this.allCheckboxControl.patchValue(false)
          this.anyItemSelected = false
        } else if (changes.every((value) => value)) {
          this.allCheckboxControl.patchValue(true)
          this.anyItemSelected = true
        } else {
          this.allCheckboxComponent?.setIndeterminate()
          this.anyItemSelected = true
        }
      })
  }

  onSortChanges(field: string): void {
    if (this.currentSortState.field === field) {
      this.currentSortState.state =
        (this.currentSortState.state + 1) %
        (Object.entries(ESortState).length / 2)
    } else {
      this.currentSortState = {
        field: field,
        state: ESortState.ASCENDING,
      }
    }
    this.sortChange.emit(this.currentSortState)
  }

  getFieldSortStateByField(field: string): ESortState {
    return this.currentSortState.field === field
      ? this.currentSortState.state
      : ESortState.DEFAULT
  }

  onDelete(): void {
    this.items.pipe(take(1)).subscribe((items) => {
      this.delete.emit(
        items!
          .filter((_, index) => this.checkboxFormArray.controls[index].value)
          .map((items) => items.id!)
      )
    })
  }
}
