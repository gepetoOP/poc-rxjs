import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';
import { HospitalService } from '../Services/hospital.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  title = 'patient';
  public patientForm: FormGroup;
  public patientObservable: Observable<FormGroup>;

  constructor(private hospitalService: HospitalService) {}

  public ngOnInit(): void {
    this.patientForm  = new FormGroup({
      nameForm: new FormControl(),
      ageForm:  new FormControl()
    });

    const lastPatientForm = this.hospitalService.getLastPatientForm();
    if(Object.keys(lastPatientForm.controls).length > 0){
      this.patientForm = lastPatientForm;
    }
    this.patientObservable = this.patientForm.get('ageForm').valueChanges;
    this.patientObservable.subscribe(
      value => this.hospitalService.setPatientForm(this.patientForm)
    );
    console.log(lastPatientForm.getRawValue())
  }
}