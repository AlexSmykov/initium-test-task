import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TableComponent } from 'src/app/shared/components/table/table.component'

describe('MainPageComponent', () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
    })
    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
