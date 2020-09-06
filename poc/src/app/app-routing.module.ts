import { PatientFormComponent } from './Patient/patient-form.component';
import { NurseFormComponent } from './Nurse/nurse-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'patient-form-component', component: PatientFormComponent },
  { path: 'nurse-form-component', component: NurseFormComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }