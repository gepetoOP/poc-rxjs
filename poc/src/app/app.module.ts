import { ReactiveFormsModule } from '@angular/forms';
import { HospitalService } from './Services/hospital.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientFormComponent } from './Patient/patient-form.component';
import { NurseFormComponent } from './Nurse/nurse-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    NurseFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    HospitalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}