import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
dniControl = new FormControl('',[Validators.minLength(7),Validators.maxLength(8),Validators.pattern('[0-9]*')])
nombresControl= new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')])
apellidoPaternoControl = new FormControl('',[Validators.required])
apellidosMaternoControl = new FormControl('',[Validators.required])
sexoControl = new FormControl('',[Validators.required])
celularControl = new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(9),Validators.pattern('[0-9]*')])
streetNameControl = new FormControl('', [Validators.required])
streetNumberControl = new FormControl('', [Validators.required])
countryControl = new FormControl('')
emailControl = new FormControl('',[Validators.required,Validators.email])
reemailControl = new FormControl('',[Validators.required,Validators.email])
passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)])
repeatPasswordControl = new FormControl('', [Validators.required, Validators.minLength(6)])

registerForm = new FormGroup({
  dni: this.dniControl,
  nombres : this.nombresControl,
  apellidoPaterno: this.apellidoPaternoControl,
  apellidoMaterno: this.apellidosMaternoControl,
  sexo: this.sexoControl,
  celular: this.celularControl,
  
  informacionComplementaria: new FormControl({
    streetName: this.streetNameControl,
    streetNumber: this.streetNumberControl,
    country: this.countryControl,
    email: this.emailControl,
    reemail: this.reemailControl,
    password: this.passwordControl,
    repeatPassword: this.repeatPasswordControl,
  }),
},{
  validators:[
    this.emailValidator(),
    this.passwordsMatchValidator()
  ]
});

emailValidator(){
  return()=>{
    if(this.emailControl.value !== this.reemailControl.value){

      return{
        emailMatch: true
      };
    }
    return null
  }
}

passwordsMatchValidator() {
  return () => {
    if (this.passwordControl.value !== this.repeatPasswordControl.value) {
      return {
        passwordsMatch: true
      }
    }
    return null
  }
}

onSubmit(){
  alert("Los datos estan correctos");
  console.log(this.registerForm.value)
}
}
