import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-weather';
  defaultCountry = 'india';
  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'other'}
  ];
  defaultGender = 'Male';
  firstName : string ;
  lastName: string ;
  email: string ;
  gen: string ;
  country: string ;
  // form property storing ngForm object
  @ViewChild('myForm') form: NgForm  ;

  onSubmit(){
    console.log(this.form);
    this.firstName = this.form.value.personDetails.firstname;

    // this.form.reset();
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstName = 'Mohit';
    // this.form.setValue({
    //   personDetails: {
    //     firstName : 'Mohit'
    //   }
    // })
    this.form.form.patchValue({
      personDetails: {
        firstname : 'Mohit',
        lastname: 'sharma',
        email: 'abc@gmail.com'
        
      
      }
    });
  }
}
