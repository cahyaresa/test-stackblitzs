import { NgModule } from '@angular/core';
import { HttpWatcher } from './http-watcher.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LinierPageLoaderComponent } from './linier-page-loader/linier-page-loader.component';



@NgModule({
  declarations: [LinierPageLoaderComponent],
  providers: [
    HttpWatcher, 
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: HttpWatcher,
      multi: true,
    }
  ],
  exports:[
    LinierPageLoaderComponent
  ]
})
export class PageLoaderModule { }
