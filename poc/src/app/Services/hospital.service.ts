import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class HospitalService {
    private patientBehaviorSubject: BehaviorSubject<FormGroup>;
    private nurseBehaviorSubject: BehaviorSubject<FormGroup>;

    constructor(){
        this.patientBehaviorSubject = new BehaviorSubject(new FormGroup({}));
        this.nurseBehaviorSubject = new BehaviorSubject(new FormGroup({}));
    }

    public setInitialPatientForm(initialFrom: FormGroup){
        this.patientBehaviorSubject = new BehaviorSubject(initialFrom);
    }

    public setInitialNurseForm(initialFrom: FormGroup){
        this.nurseBehaviorSubject = new BehaviorSubject(initialFrom);
    }

    public getLastPatientForm() {
        return this.patientBehaviorSubject.value;
    }

    public getLastNurseForm() {
        return this.nurseBehaviorSubject.value;
    }

    public setPatientForm(formGroup: FormGroup) {
        this.patientBehaviorSubject.next(formGroup);
    }

    public setNurseForm(formGroup: FormGroup) {
        this.nurseBehaviorSubject.next(formGroup);
    }
}