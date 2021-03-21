import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MktCategoriesServices {
  public categorySelection: Subject<void> = new Subject<void>();
}
