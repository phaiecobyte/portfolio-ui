import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  profileId = 1; // For now it's static
  profile: any;
  imageUrl: string = '';
  isEditMode = false;
  profileForm!: FormGroup;

  selectedFile!: File;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.http.get<any>(`http://localhost:9999/api/v1/profile/${this.profileId}`).subscribe(data => {
      this.profile = data;
      this.imageUrl = `http://localhost:9999/api/v1/profile/${this.profileId}/image`;

      this.profileForm = this.fb.group({
        firstName: [data.firstName],
        lastName: [data.lastName],
        position: [data.position],
        bio: [data.bio],
      });
    });
  }

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }

  saveProfile() {
    if (this.profileForm.invalid) return;

    this.http.put(`http://localhost:9999/api/v1/profile/${this.profileId}`, this.profileForm.value)
      .subscribe(() => {
        this.isEditMode = false;
        this.loadProfile();
      });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage() {
  if (!this.selectedFile) return;

  const formData = new FormData();
  formData.append('file', this.selectedFile);

  // Optional: Only send text fields if backend expects them
  formData.append('firstName', this.profileForm.value.firstName);
  formData.append('lastName', this.profileForm.value.lastName);
  formData.append('position', this.profileForm.value.position);
  formData.append('bio', this.profileForm.value.bio);

  this.http.put(`http://localhost:9999/api/v1/profile/${this.profileId}`, formData)
    .subscribe(() => {
      this.previewUrl = null;
      this.loadProfile();

      // Close modal
      const modal = document.getElementById('uploadImageModal') as any;
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal?.hide();
    });
}

}
