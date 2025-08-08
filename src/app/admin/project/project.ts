import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { StaticBackDropModal } from "../../components/static-backdrop-modal";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { InputComponent } from "../../components/input";
import { AlertService } from '../../services/alert.service';
import { SafeUrlPipe } from "../../pipe/safe-url-pipe";
import { SpinnerComponent } from "../../components/spinner";
declare var bootstrap: any;

@Component({
  selector: 'app-project',
  imports: [StaticBackDropModal, NzBreadCrumbModule, ReactiveFormsModule, InputComponent, SafeUrlPipe, SpinnerComponent],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project implements OnInit, OnDestroy{
  frm!:FormGroup;
  projects:any;
  selectedId:number=0;
  isLoading:boolean=false;

  @ViewChild('projectModal') projectModal!: StaticBackDropModal;
  @ViewChild('projectEditModal') projectEditModal!: StaticBackDropModal;
  @ViewChild('projectDelModal') projectDelModal!:StaticBackDropModal;

  constructor(
    private pageTitleService:PageTitleService,
    private fb:FormBuilder,
    private service:ProjectService,
    private alertService:AlertService
  ){}

  ngOnInit(): void {
      this.pageTitleService.setPageTitle('Project');
      this.getAll();
      this.initFrm();
  }

  ngOnDestroy(): void {
  }

  initFrm(){
    this.frm = this.fb.group({
      id:[0],
      name:[''],
      description:[''],
      tech:[],
      sourceCodeUrl:[''],
      demoVideoUrl:['']
    })
  }

  getAll(){
    this.isLoading = true;
    this.service.findAll().subscribe(
      (res:any)=>{
        this.isLoading = false;
        this.projects = res.content
        console.log("data:",this.projects)
      }
    )
  }

  getById(id:number){
    this.selectedId = id;
    this.service.getById(id).subscribe(
      (res:any)=>{
        console.log("get by id:",res);
      }
    )
  }

  create(){
    this.isLoading=true;
    const frmValue = {...this.frm.value}
    frmValue.tech = frmValue.tech
    ?frmValue.tech
       .split(',')
       .map((s:string)=>s.trim())
       .filter(Boolean)
    : []
    this.service.create(frmValue).subscribe({
      next:()=>{
        this.isLoading = false;
        this.getAll();
        this.alertService.showSuccess();
        this.projectModal.close();
        this.frm.reset();
      }
    })
  }

  setFrmValue(data: any) {
    this.selectedId = data.id;
    const patchData = {
      ...data,
      tech: Array.isArray(data.tech) ? data.tech.join(', ') : data.tech
    };
    this.frm.patchValue(patchData);
  }

  update() {
    const frmValue = { ...this.frm.value };

    if (typeof frmValue.tech === 'string') {
      frmValue.tech = frmValue.tech
        .split(',')
        .map((s: string) => s.trim())
        .filter(Boolean);
    } else if (Array.isArray(frmValue.tech)) {
      frmValue.tech = frmValue.tech.map((s: string) => s.trim()).filter(Boolean);
    } else {
      frmValue.tech = [];
    }

    this.service.update(this.selectedId, frmValue).subscribe((res: any) => {
      this.alertService.showSuccess();
      this.projectEditModal.close();
      console.log(this.selectedId, frmValue);
      this.getAll();
      this.frm.reset();
    });
  }

  
  delete(){
    this.service.delete(this.selectedId).subscribe(
      (res:any)=>{
        this.alertService.showSuccess();
        this.projectDelModal.close();
        this.getAll();
        console.log(res);
      }
    )
  }
  
}
