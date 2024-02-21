import { Component, OnInit } from '@angular/core'
import { EUserFields, TUser } from 'src/app/core/api/users/users.interface'
import { TModelFormGroup } from 'src/app/shared/interfaces/model-form-group.interface'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { EValidatePatternsRegex } from 'src/app/shared/enums/validator-paterns.enum'
import { UserFormModalService } from 'src/app/pages/main-page/components/user-table/components/user-form/user-form-modal.service'
import { UserFormModalHelperService } from 'src/app/pages/main-page/components/user-table/components/user-form/user-form-modal-helper.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { filter } from 'rxjs'

@UntilDestroy()
@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.scss'],
  providers: [UserFormModalService],
})
export class UserFormModalComponent implements OnInit {
  userFormGroup: TModelFormGroup<TUser> = this.fb.group({
    [EUserFields.NAME]: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    [EUserFields.SURNAME]: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    [EUserFields.EMAIL]: this.fb.control<string>('', [
      Validators.required,
      Validators.pattern(EValidatePatternsRegex.EMAIL),
    ]),
    [EUserFields.PHONE]: this.fb.control<string>('', [
      Validators.pattern(EValidatePatternsRegex.PHONE),
      Validators.maxLength(12),
    ]),
  })

  constructor(
    private fb: NonNullableFormBuilder,
    private userFormService: UserFormModalService,
    private userFormHelperService: UserFormModalHelperService
  ) {}

  ngOnInit(): void {
    this.userFormHelperService.userToEdit$
      .pipe(
        untilDestroyed(this),
        filter((result): result is TUser => !!result)
      )
      .subscribe((user) => {
        this.loadUser(user)
      })
  }

  loadUser(user: TUser): void {
    this.userFormGroup.patchValue(user)
  }

  saveUser(): void {
    this.userFormHelperService.userToEdit$
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        console.log(user)
        this.userFormService.saveUser(
          this.userFormGroup.getRawValue(),
          user ? user.id : undefined
        )
      })
  }
}
