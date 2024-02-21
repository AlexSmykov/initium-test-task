import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component'

describe('MainPageComponent', () => {
  let component: ModalComponent
  let fixture: ComponentFixture<ModalComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
    })
    fixture = TestBed.createComponent(ModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
