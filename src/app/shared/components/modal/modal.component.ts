import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TModalConfig } from 'src/app/shared/components/modal/modal.interface'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input({ required: true }) config!: TModalConfig
  @Input() okButtonDisable?: boolean

  @Output() close = new EventEmitter<void>()
  @Output() okAction = new EventEmitter<void>()

  closeModal(): void {
    this.close.emit()
  }

  primaryAction(): void {
    this.okAction.emit()
  }
}
