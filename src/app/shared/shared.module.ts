import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginComponent } from './auth-dialog/login/login.component';

import { MenubarModule } from "primeng/menubar";
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ToolbarComponent, AuthDialogComponent, LoginComponent],
  imports: [
    CommonModule,
    MenubarModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [ToolbarComponent]
})
export class SharedModule { }
