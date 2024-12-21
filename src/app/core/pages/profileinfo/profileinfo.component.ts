import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { LayerComponent } from '../../../shared/componets/ui/layer/layer.component';
import { callAPIService } from '../../../shared/services/CALLAPI/callapi.service';
import { AdaptuserInfoRes } from '../../../shared/services/subject/interfaces/adaptuserinfo/adapt.userinfores/adaptuserinfores';
// import { FileUploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-profileinfo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './profileinfo.component.html',
  styleUrl: './profileinfo.component.css',
})
export class ProfileinfoComponent {
  defaultImage: string = 'assets/images/Profile_avatar_placeholder_large.png'; // Placeholder image
  profileImage: string | null = null; // Current profile image
  selectedFile: File | null = null;


  userinformation!:AdaptuserInfoRes

  constructor(private _callAPIService: callAPIService) {}
  ngOnInit(): void {
    this.userinfo();
    // Load the saved profile image from localStorage
    const storedImage = localStorage.getItem('profilePhoto');
    if (storedImage) {
      this.profileImage = storedImage;
    }
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];

      // Preview the new image
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  saveProfilePhoto(): void {
    if (this.profileImage) {
      localStorage.setItem('profilePhoto', this.profileImage);

      this.selectedFile = null;
    }
  }
  NoProfilePhoto(): void {
    this.profileImage = '';
    localStorage.setItem('profilePhoto', '');
    this.selectedFile = null;
  }

  userinfo() {
    this._callAPIService.userInfo().subscribe({
      next: (res) => {
        console.log(res);
        this.userinformation=res
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
