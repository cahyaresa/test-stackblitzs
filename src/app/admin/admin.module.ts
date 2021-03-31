import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

// import {MatToolbarModule} from '@angular/material/toolbar';


const routeradmin: Routes = [
  {
    path:'', 
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'gallery',
        component:GalleryComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'',
        redirectTo:'admin/dashboard',
        pathMatch:'full'
      }
    ]

  }
]

@NgModule({
  declarations: [AdminComponent, DashboardComponent, GalleryComponent, ImageUploaderComponent, ProductComponent, ProductDetailComponent],
  entryComponents:[ImageUploaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routeradmin),
    MaterialDesign,
    ImageCropperModule,
    FormsModule
    // MatToolbarModule
  ]
})
export class AdminModule { }
