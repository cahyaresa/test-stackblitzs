import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ImageUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any){
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent){
    this.croppedImage = event.base64;
  }
  imageLoaded(){
    console.log("loaded")
  }
  cropperReady(){
    console.log("ready")
  }
  loadImageFailed(){
    console.log("failed")
  }
  onNoClick():void{
    this.dialogRef.close(false);
  }

}
