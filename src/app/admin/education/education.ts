import { Component, OnInit, ViewChild } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { EduService } from '../../services/edu.service';
import { StaticBackDropModal } from '../../components/static-backdrop-modal';
import { InputComponent } from '../../components/input';

@Component({
  selector: 'app-education',
  imports: [StaticBackDropModal,InputComponent, ReactiveFormsModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education implements OnInit{
  eduList:any;
  selectedId:number=0;
  frm!:FormGroup;
  loading:boolean=true;

  @ViewChild('eduModal') eduModal!:StaticBackDropModal;
  @ViewChild('eduEditModal') eduEditModal!:StaticBackDropModal;
  @ViewChild('eduDelModal') eduDelModal!:StaticBackDropModal;
  
  constructor(
    private pageTitleService:PageTitleService,
    private fb:FormBuilder,
    private alertService:AlertService,
    private service:EduService
  ){}

  ngOnInit(): void {
      this.pageTitleService.setPageTitle('Education');
      this.initFrm();
      this.getAll();
  }

  initFrm(){
    this.frm = this.fb.group({
      id:[0],
      degree:[''],
      major:[''],
      school:[''],
      startDate:[''],
      endDate:[''],
      address:[''],
      stillLearning:[false]
    })
  }

  getAll(){
    this.service.findAll().subscribe({
      next:(res:any)=>{
        this.loading = false;
        this.eduList = res.content;
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
        this.eduEditModal.close();
      }
    )
  }

  delete(){
    this.service.delete(this.selectedId).subscribe(
      ()=>{
        this.getAll();
        this.alertService.showSuccess();
        this.eduDelModal.close();
      }
    )
  }
  
}
