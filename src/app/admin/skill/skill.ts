import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { StaticBackDropModal } from "../../components/static-backdrop-modal";
import { SkillModel, SkillService } from '../../services/skill.service';
import { AlertService } from '../../services/alert.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from "../../components/input";
import { NzSliderComponent } from 'ng-zorro-antd/slider';
import { SpinnerComponent } from '../../components/spinner';

@Component({
  selector: 'app-skill',
  imports: [StaticBackDropModal, InputComponent, ReactiveFormsModule,NzSliderComponent,SpinnerComponent],
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class Skill implements OnInit{
  skills:any;
  frm!:FormGroup;
  selectedId:number=0;
  isLoading:boolean=false;

  @ViewChild('skillModal') skillModal!:StaticBackDropModal;
  @ViewChild('skillEditModal') skillEditModal!:StaticBackDropModal;
  @ViewChild('skillDelModal') skillDelModal!:StaticBackDropModal;

  constructor( 
    private pageTitleService:PageTitleService,
    private service:SkillService,
    private alertService:AlertService,
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Skill');
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
        this.skills = res.content;
        console.log("data:",this.skills);
        this.isLoading = false;
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
   if(this.frm.invalid) return;
   this.isLoading = true;
   this.service.create(this.frm.value).subscribe({
    next:()=>{
      this.isLoading = false;
      this.alertService.showSuccess();
      this.skillModal.close();
      this.frm.reset();
    },
    error:()=>{
      this.alertService.showError();
      this.isLoading = false;
    }
   }) 
  }

  setFrmValue(data:any){
    this.selectedId = data.id;
    this.frm.patchValue(data);
    console.log(data);
  }

  update(){
    if(this.frm.invalid) return;
    this.isLoading = true;
    this.frm.value.id = 0;
    this.service.update(this.selectedId,this.frm.value).subscribe(
      (res:any)=>{
        this.getAll();
        this.alertService.showSuccess();
        this.initFrm();
        this.skillEditModal.close();
        this.isLoading=false;
      }
    )
  }

  delete(){
    this.isLoading = true;
    this.service.delete(this.selectedId).subscribe(
      (res:any)=>{
        this.isLoading = false;
        this.getAll();
        this.alertService.showSuccess();
        this.skillDelModal.close();
      }
    )
  }

  formatter(value: number): string {
    return `${value}%`;
  }

}
