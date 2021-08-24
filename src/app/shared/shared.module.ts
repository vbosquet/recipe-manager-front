import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginComponent } from './auth-dialog/login/login.component';

import { MenubarModule } from "primeng/menubar";
import { DialogModule } from 'primeng/dialog';
import { RegisterComponent } from './auth-dialog/register/register.component';

@NgModule({
  declarations: [ToolbarComponent, AuthDialogComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MenubarModule,
    DialogModule,
    ReactiveFormsModule
  ],
  exports: [ToolbarComponent, AuthDialogComponent, LoginComponent, RegisterComponent]
})
export class SharedModule { }
