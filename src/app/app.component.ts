import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      personDetails: new FormGroup({
        firstname : new FormControl(null, [Validators.required, this.noSpaceAllowed]),
      }),
      
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),
      skills: new FormArray([new FormControl(null,Validators.required)])
    })
  }
  
  onSubmit(){
    console.log(this.reactiveForm);
  }

   get skillsArray() {
    return this.reactiveForm.get('skills') as FormArray;
  }

  addSkill(){
     (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null));
  }

  // custom validator
  noSpaceAllowed(control: FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed: true};
    }
    return null;
  }

  //async validator
  emailNotAllowed(control: FormControl):Promise<any> | Observable<any>{
    const response = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'abc@gmail.com'){
          resolve({emailNotAllowed: true})
        } else{
          resolve(null)
        }
      },5000)
    })
    return response;
  }
}
