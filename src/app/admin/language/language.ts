import { Component, OnInit, ViewChild } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LangService } from '../../services/lang.service';
import { AlertService } from '../../services/alert.service';
import { StaticBackDropModal } from '../../components/static-backdrop-modal';
import { NzSliderComponent } from 'ng-zorro-antd/slider';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../components/input';

@Component({
  selector: 'app-language',
  imports: [CommonModule,ReactiveFormsModule, StaticBackDropModal,NzSliderComponent, InputComponent],
  templateUrl: './language.html',
  styleUrl: './language.css'
})
export class Language implements OnInit{
  frm!:FormGroup;
  languages:any;
  selectedId:number=0;

  @ViewChild('langModal') langModal!:StaticBackDropModal
  @ViewChild('langEditModal') langEditModal!:StaticBackDropModal
  @ViewChild('langDelModal') langDelModal!:StaticBackDropModal

  constructor(
    private pageTitleService:PageTitleService,
    private service:LangService,
    private alertService:AlertService,
    private fb:FormBuilder
  ){}
  ngOnInit(): void {
      this.pageTitleService.setPageTitle('Language');
      this.initFrm();
      this.getAll();
  }
  initFrm(){
    this.frm = this.fb.group({
      id:[0],
      name:[''],
      icon:[''],
      level:[0]
    })
  }

  getAll(){
    this.service.findAll().subscribe({
      next:(res:any)=>{
        this.languages = res.content;
        console.log("data:",this.languages);
      }
    })
  }

  getById(id:number){
    this.selectedId = id;
    this.service.getById(this.selectedId).subscribe(
      (res:any)=>{
        console.log("log:", res);
      }
    )
  }

  create(){
   this.service.create(this.frm.value).subscribe(
    (res:any)=>{
      this.alertService.showSuccess();
      this.langModal.close();
      this.getAll();
      console.log("form value",this.frm.value);
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
        this.langEditModal.close();
      }
    )
  }

  delete(){
    this.service.delete(this.selectedId).subscribe(
      (res:any)=>{
        this.getAll();
        this.alertService.showSuccess();
        this.langDelModal.close();
      }
    )
  }

  formatter(value: number): string {
    return `${value}%`;
  }
}
