import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UserTableComponent } from 'src/app/pages/main-page/components/user-table/user-table.component'

describe('MainPageComponent', () => {
  let component: UserTableComponent
  let fixture: ComponentFixture<UserTableComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTableComponent],
    })
    fixture = TestBed.createComponent(UserTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
