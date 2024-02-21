import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PrimaryButtonComponent } from 'src/app/shared/components/primary-button/primary-button.component'

describe('MainPageComponent', () => {
  let component: PrimaryButtonComponent
  let fixture: ComponentFixture<PrimaryButtonComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryButtonComponent],
    })
    fixture = TestBed.createComponent(PrimaryButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
