import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UserFormModalComponent } from 'src/app/pages/main-page/components/user-table/components/user-form/user-form-modal.component'

describe('MainPageComponent', () => {
  let component: UserFormModalComponent
  let fixture: ComponentFixture<UserFormModalComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormModalComponent],
    })
    fixture = TestBed.createComponent(UserFormModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
