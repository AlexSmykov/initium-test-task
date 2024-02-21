import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ClickableIconComponent } from './clickable-icon.component'

describe('MainPageComponent', () => {
  let component: ClickableIconComponent
  let fixture: ComponentFixture<ClickableIconComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickableIconComponent],
    })
    fixture = TestBed.createComponent(ClickableIconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
