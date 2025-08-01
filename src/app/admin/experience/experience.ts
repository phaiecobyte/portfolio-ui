import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExperienceService } from '../../services/experience.service';
import { AlertService } from '../../services/alert.service';
import { StaticBackDropModal } from '../../components/static-backdrop-modal';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../components/input';

@Component({
  selector: 'app-experience',
  imports: [CommonModule,StaticBackDropModal,ReactiveFormsModule,InputComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements OnInit{
  experiences:any;
  frm!:FormGroup;
  selectedId:number=0;

  @ViewChild('expModal') expModal!:StaticBackDropModal
  @ViewChild('expEditModal') expEditModal!:StaticBackDropModal
  @ViewChild('expDelModal') expDelModal!:StaticBackDropModal

  constructor(
    private pageTitleService:PageTitleService,
    private fb:FormBuilder,
    private service:ExperienceService,
    private alertService:AlertService
  ){}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Experience');
    this.initFrm();
    this.getAll();
  }

  initFrm(){
    this.frm = this.fb.group({
      id:[0],
      position:[''],
      startDate:[''],
      endDate:[''],
      description:[''],
      stillWorking:[false]
    })
  }

  getAll(){
    this.service.findAll().subscribe(
      (res:any)=>{
        this.experiences = res.content;
        console.log("experience data:",this.experiences)
      }
    )
  }

  getById(id:number){
    this.selectedId = id;
    this.service.getById(this.selectedId).subscribe(
      (res:any)=>{
        console.log();
      }
    )
  }

  create(){
    this.service.create(this.frm.value).subscribe(
      (res:any)=>{
        this.getAll();
        this.alertService.showSuccess();
        this.expModal.close();
        console.log("response:",res)
      }
    )
  }

  setFrmValue(data:any){
    this.selectedId = data.id;
    this.frm.patchValue(data);
  }

  update(){
    this.service.update(this.selectedId, this.frm.value).subscribe(
      (res:any)=>{
        this.getAll();
        this.alertService.showSuccess();
        this.expEditModal.close();
        this.frm.reset();
      }
    )
  }

  delete(){
    this.service.delete(this.selectedId).subscribe(
      (res:any)=>{
        this.getAll();
        this.alertService.showSuccess();
        this.expDelModal.close();
        console.log(res);
      }
    )
  }

}
