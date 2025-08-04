import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';
import { ProfileService } from '../../services/profile.service';
import { first } from 'rxjs';
import { PageTitleService } from '../../services/page-title.service';

declare var bootstrap: any;

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl:'./profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  profileId = 1; // For now it's static
  profile: any;
  isEditMode = false;
  profileForm!: FormGroup;

  selectedFile!: File;
  previewUrl: string | ArrayBuffer | null = null;
  profileImage:any;

  constructor(
    private fb: FormBuilder, 
    private service:ProfileService,
    private alertService:AlertService,
    private pageTitleService:PageTitleService
  ) {}

  ngOnInit(): void {
    this.loadProfile();
    this.pageTitleService.setPageTitle('Profile')
  }


  loadProfile(){
    this.service.getById(this.profileId).subscribe(
      (res:any)=>{
        this.service.getProfileImage(this.profileId).subscribe((imageBlob: Blob) => {
        this.profileImage = URL.createObjectURL(imageBlob);
      });
        this.profile = res;
        this.profileForm = this.fb.group({
          firstName:[res.firstName],
          lastName:[res.lastName],
          position:[res.position],
          bio:[res.bio]
        })
    })
  }

 changeImage(): void {
    const formData = new FormData;
    this.service.changeProfile(this.profileId,formData ).subscribe({
      next: () => {
        alert('Image uploaded successfully');
        this.loadProfile(); // Refresh profile image after upload
      },
      error: (err) => {
        console.error(err);
        alert('Failed to upload image');
      }
    });
  }

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }

  saveProfile() {
  if (this.profileForm.invalid) {
    this.profileForm.markAllAsTouched(); // Highlight validation errors
    return;
  }
  console.log(this.profileForm.value);
  this.service.update(this.profileId, this.profileForm.value).subscribe({
    next: () => {
      this.isEditMode = false;
      this.loadProfile(); 
      this.alertService.showSuccess();
    },
    error: (err) => {
      console.error('Failed to update profile:', err);
      this.alertService.showError();
    }
  });
}


  onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (file) {
    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

uploadImage() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.service.changeProfile(this.profileId, formData).subscribe({
      next: () => {
        this.previewUrl = null;
        this.loadProfile();
        this.alertService.showSuccess();
        // Close modal
        const modalElement = document.getElementById('uploadImageModal');
        if (modalElement) {
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          modalInstance?.hide();
        }

        this.profileForm.get('profileImage')?.reset();
      },
      error: (err) => {
        console.error('Failed to upload image:', err);
        alert('Image upload failed.');
      }
    });
  }


}
