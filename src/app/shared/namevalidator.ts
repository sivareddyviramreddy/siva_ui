import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function nameValidator(control:AbstractControl):{[key:string]:any}| null{
//   const forbidden=/admin/.test(control.value);
//   return forbidden ?{'forbiddenName':{value:control.value}} :null;

// }
export function nameValidator(forbbidenName:RegExp):ValidatorFn {
    return (control:AbstractControl):{[key:string]:any}| null =>{
        const forbidden=forbbidenName.test(control.value);
        return forbidden ?{'forbiddenName':{value:control.value}} :null;
}
  
  
}