import { Component, OnInit, ViewChild } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StaticBackDropModal } from '../../components/static-backdrop-modal';
import { AlertService } from '../../services/alert.service';
import { ReferenceService } from '../../services/reference.service';
import { InputComponent } from "../../components/input";

@Component({
  selector: 'app-reference',
  imports: [InputComponent,ReactiveFormsModule,StaticBackDropModal],
  templateUrl: './reference.html',
  styleUrl: './reference.css'
})
export class Reference implements OnInit{

  refList:any;
  selectedId:number=0;
  frm!:FormGroup;
  loading:boolean=true;

  @ViewChild('refModal') refModal!:StaticBackDropModal;
  @ViewChild('refEditModal') refEditModal!:StaticBackDropModal;
  @ViewChild('refDelModal') refDelModal!:StaticBackDropModal;
  
  constructor(
    private pageTitleService:PageTitleService,
    private fb:FormBuilder,
    private alertService:AlertService,
    private service:ReferenceService
  ){}

  ngOnInit(): void {
      this.pageTitleService.setPageTitle('Reference');
      this.initFrm();
      this.getAll();
  }

  initFrm(){
    this.frm = this.fb.group({
      id:[0],
      name:[''],
      position:[''],
      email:[''],
      phone:[''],
      address:['']
    })
  }

  getAll(){
    this.service.findAll().subscribe({
      next:(res:any)=>{
        this.loading = false;
        this.refList = res.content;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  getById(id:number){
    this.selectedId = id;
    this.service.getById(this.selectedId).subscribe({
      next:(res:any)=>{
        console.log(res);
      }
    })
  }

  create(){
    this.service.create(this.frm.value).subscribe(
      ()=>{
        this.getAll();
        this.alertService.showSuccess();
      }
    )
  }

   setFrmValue(data:any){
    this.selectedId = data.id;
    this.frm.patchValue(data);
    console.log(data);
  }

  update(){
    this.frm.value.id = 0;
    this.service.update(this.selectedId,this.frm.value).subscribe(
      (res:any)=>{
        this.getAll();
        this.alertService.showSuccess();
        this.initFrm();
        this.refEditModal.close();
      }
    )
  }

  delete(){
    this.service.delete(this.selectedId).subscribe(
      ()=>{
        this.getAll();
        this.alertService.showSuccess();
        this.refDelModal.close();
      }
    )
  }
}
