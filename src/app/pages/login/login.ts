import { Component } from '@angular/core';
import { InputComponent } from '../../components/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  imports: [InputComponent,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  frm!:FormGroup;

    constructor(
        private fb:FormBuilder,
        private router:Router,
        private alertService:AlertService
    ){}

    ngOnInit(): void {
        this.frm = this.fb.group({
            phoneNumber:['', [Validators.required]],
            password:['', [Validators.required]]
        });
    }

    isFieldInvalid(field:string):boolean{
        const control = this.frm.get(field);
        return control ? (control.invalid && control.touched) :false;
    }

    onSubmit(){
        if(this.frm.invalid){
            this.frm.markAllAsTouched();
            return;
        }else{
           if(this.frm.value.phoneNumber === 'phaiecobyte@gmail.com' && this.frm.value.password === 'ilovephiya'){
            this.alertService.loginSuccess();
            this.router.navigate(['/admin']);
           }
        }
    }

  onBackHome(){
    this.router.navigate(['/home'])
  }
}
