import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HospitalService } from '../Services/hospital.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nurse-form',
  templateUrl: './nurse-form.component.html',
  styleUrls: ['./nurse-form.component.css'],
})
export class NurseFormComponent implements OnInit {
  title = 'nurse';
  public nurseForm: FormGroup;
  public nurseObservable: Observable<FormGroup>;

  constructor(private hospitalService: HospitalService) {}

  public ngOnInit(): void {
    this.nurseForm  = new FormGroup({
      experienceForm:  new FormControl()
    });

    const lastPatientFormSaved = this.hospitalService.getLastPatientForm();
    if(lastPatientFormSaved.get('ageForm')){
      this.nurseForm.get('experienceForm').setValue('so balaozada' + lastPatientFormSaved.get('ageForm').value);
    }

    this.nurseObservable = this.nurseForm.get('experienceForm').valueChanges;
  }
}