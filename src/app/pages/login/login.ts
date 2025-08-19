import { Component } from '@angular/core';
import { InputComponent } from '../../components/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { SpinnerComponent } from '../../components/spinner';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ReactiveFormsModule,SpinnerComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  frm!: FormGroup;
  isLoading:boolean=false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private auth: Auth
  ) {}

  ngOnInit(): void {
    this.frm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.frm.get(field);
    return control ? control.invalid && control.touched : false;
  }

  async onSubmit() {
    this.isLoading=true;
    if (this.frm.invalid) {
      this.frm.markAllAsTouched();
      return;
    }

    const { email, password } = this.frm.value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
         
      const token = await userCredential.user.getIdToken();
      localStorage.setItem('token', token);
      this.alertService.loginSuccess(); 
      this.router.navigate(['/admin']);
      this.isLoading = false;
    } catch (error: any) {
      console.error('Login failed:', error.message);
      this.alertService.showError();
    }
  }

  onBackHome() {
    this.router.navigate(['/home']);
  }
}
