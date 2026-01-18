import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactService } from '../../services/contact.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SpinnerComponent } from "../../components/spinner";

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit{
  frm!:FormGroup;
  isLoading:boolean=false;

  constructor(
    private fb:FormBuilder,
    private service:ContactService,
    private alert:NzNotificationService
  ){}

  ngOnInit(): void {
      this.frm = this.fb.group({
        id:[0],
        name:['',Validators.required],
        email:['', [Validators.email, Validators.required]],
        content:['', Validators.required]
      })
  }

  

  sendMessage(){
  
    this.alert.warning(
      'Service Unavailable',
      'សូមអភ័យទោស! ខ្ញុំបានសម្រេចចិត្តបិទមាស៊ីនមេ ដូច្នេះអ្នកមិនអាចផ្ញើសារបានទេ។ សូមទាក់ទងតាមរយៈបណ្តាញសង្គមរបស់ខ្ញុំ។ អរគុណច្រើន!',
      {
        nzPlacement: 'bottomRight',
        nzDuration: 10000
      }
    );

    return; // stop execution


    this.isLoading = true;
    this.service.create(this.frm.value).subscribe({
      next:()=>{
        this.isLoading = false;
        this.alert.success(
          "Success","Message is sent. We will contact you back. Thank you!",{
            nzPlacement:'topRight',
            nzDuration:5000
          })
        this.frm.reset();
      }
    })
  }

}