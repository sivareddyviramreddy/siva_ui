import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl):{[key:string]:boolean}|null{

    const password=control.get("pass");
    const confirmpassword=control.get("confirmpassword");
    return password && confirmpassword && password.value !=confirmpassword.value ? {'mismatch':true}:null;
}